import _ from 'lodash';

import CONSTANTS from '../constants';
import GLOBALS from '../globals';
import HELPERS from '../helpers';

import { redisClient } from './Redis';
import { smiteApiClient, SmiteApi } from './SmiteApi';

const { REDIS, SMITE_QL, ERRORS } = CONSTANTS;
const {
  //
  ENTRY,
  ROOT,
  PLAYERS,
  MATCHES,
  HISTORY,
  DETAILS,
  GLOBAL,
  PATCH_VERSIONS,
  MISC,
  ITEMS,
} = REDIS;
const { IGN, HZ_PLAYER_NAME } = SMITE_QL;
const { CLIENT_NOT_READY } = ERRORS;

export class SmiteQL extends SmiteApi {
  constructor() {
    super();
    this.redis = redisClient;
    this.smiteApi = smiteApiClient; // for sandbox purposes
    this.isReady = false;
  }

  // ******************************************************************** //
  // **************************** Assertions **************************** //
  // ******************************************************************** //

  /**
   * throws error if SmiteQL is not ready
   * @returns {void}
   */
  _assertReady() {
    if (!this.isReady) {
      throw new Error(CLIENT_NOT_READY);
    }
  }

  // ******************************************************************** //
  // **********************  Redis Internal Methods ********************* //
  // ******************************************************************** //

  /**
   *
   * @param {String} path - path to object in redis
   * @returns {Boolean} response - true or false
   */
  async _exists(path) {
    const response = await this.redis.json.type(ENTRY, path);
    return !!response;
  }

  /**
   *
   * @param {String} path - path to object in redis
   * @returns {Object} data
   */
  async _get(path) {
    const data = await this.redis.json.get(ENTRY, { path });
    return data;
  }

  /**
   *
   * @param {String} path - path to object
   * @param {Object} data - data
   * @returns {Object} data
   */
  async _set(path, data) {
    const output = await this.redis.json.set(ENTRY, path, data);
    return output;
  }

  /**
   * resets database and smite client state
   * @returns {void}
   */
  async _reset() {
    await this.redis.flushAll();
    this.isReady = false;
  }

  // ******************************************************************** //
  // **********************  Redis Startup Methods ********************** //
  // ******************************************************************** //

  /**
   * creates initial state for redis DB if it does not already exists. This function can
   * additionally migrate schema if needed
   * @returns {Boolean} - whether initialState already exists
   */
  async _createInitialState() {
    const doesRootExist = await this._exists(ROOT);

    if (doesRootExist) {
      // TODO: later when we have different schema versions,
      // we can update the state from here
      return true;
    }

    const initialState = {
      [MISC]: {
        // schemaVersion refers to version for all JSON and Array shapes
        // The shapes for objects could change over time and when those updates
        // hit production, the old redis DB info has to be updated to the latest schema
        schema_version: '1.0.0',
      },

      [PLAYERS]: {
        // example:
        // key is a player's ign name
        // value is an object with
        //
        // dhko: {
        //   info: {}, // player info from 'getPlayer'
        //   matches: {}, // map of matchIds
        //   history: [], // list of match details for a player
        // },
      },

      [GLOBAL]: {
        [MATCHES]: {
          // example:
          // key is a matchId
          // value is data from 'getMatchDetails'
          //
          // 1232511801: {
          //   raw: {}, // non-mutated data from Smite API
          //   partyDetails: {}, // party details for a match calculated by SmiteQL
          // }
          //
        },
        [ITEMS]: {
          // example:
          // key is a patch version
          //
          // '9.3': {
          //   'Asi': {}
          // }
        },
        [PATCH_VERSIONS]: {
          currentPatch: null, // like '9.3'
          previousPatches: [], // like ['9.3', '9.2']
        },
      },
    };

    await this._set(ROOT, initialState);

    return false;
  }

  /**
   * updates globals and redis with patchInfo passed in or
   * retrieves latest patchInfo from Smite API to update with
   * @param {?Object} patchInfo - optionally pass in patchInfo
   * @returns {String} patchVersion
   */
  async _updatePatchVersion(patchInfo) {
    const latestPatchInfo = !_.isEmpty(patchInfo) ? patchInfo : await this.getPatchInfo();
    const patchVersion = latestPatchInfo.version_string;

    if (GLOBALS.patchVersion === patchVersion) {
      // if our latest patchVersion is already upto date
      // skip any updates to redis
      return patchVersion;
    }

    // update globals
    _.assign(GLOBALS, { patchVersion });

    const previousPatches = await this._get(`${GLOBAL}.${PATCH_VERSIONS}.previousPatches`);

    const patchVersions = {
      currentPatch: patchVersion,
      previousPatches: [patchVersion, ...previousPatches],
    };

    // update redis
    await this._set(`${GLOBAL}.${PATCH_VERSIONS}`, patchVersions);

    return patchVersion;
  }

  /**
   * Sets up top level schema for redis db
   * @returns {Boolean} - true if ready was already called
   *                    - false if ready was not already called
   */
  async ready() {
    const { isReady } = this;
    this.isReady = true;

    await this._createInitialState();
    await this._updatePatchVersion();

    return isReady;
  }

  // ******************************************************************** //
  // *************************  SmiteQL Methods ************************* //
  // ******************************************************************** //

  /**
   * get's a match's detais. details include raw data from Smite API.
   * partyDetails refer to processed data that split out who is in which party
   * for each player. If the match already exists in redis, we do not have to fetch
   * data from Smite API again.
   * @param {Number} matchId - like 1232096830
   * @returns {Array<Object>} - data
   */
  async getMatchDetails(matchId) {
    this._assertReady();

    const doesMatchExist = await this._exists(`${GLOBAL}.${MATCHES}.${matchId}`);

    if (doesMatchExist) {
      return await this._get(`${GLOBAL}.${MATCHES}.${matchId}`);
    }

    const matchDetails = await super.getMatchDetails(matchId);
    const partyDetails = HELPERS.processPartyDetails(matchDetails);
    await this._set(`${GLOBAL}.${MATCHES}.${matchId}`, { raw: matchDetails, partyDetails });

    return {
      raw: matchDetails,
      partyDetails,
    };
  }

  /**
   * gets a player's match history (upto last 50 matches). If the most recent
   * history is already in redis, it will not make any redis updates. If the player's
   * account information doesn't exist, it will fill that in
   * @param {String} accountName - like 'dhko'
   * @returns {Object} - data
   */
  async getMatchHistory(accountName) {
    this._assertReady();

    const doesAccountExist = await this._exists(`${PLAYERS}.${accountName}`);

    if (!doesAccountExist) {
      await this.getPlayer(accountName);
    }

    const playerInfo = await this._get(`${PLAYERS}.${accountName}`);
    const matchHistory = await super.getMatchHistory(accountName);
    const prevMatchInfo = { history: playerInfo.history, matches: playerInfo.matches };

    const { history, matches, hasDiff } = HELPERS.processMatchHistory(prevMatchInfo, matchHistory);

    if (hasDiff) {
      await this._set(`${PLAYERS}.${accountName}.${HISTORY}`, history);
      await this._set(`${PLAYERS}.${accountName}.${MATCHES}`, matches);

      // Find match details for all matches and request
      // that information in parallel
      await Promise.allSettled(
        _.map(matches, async (match) => {
          const matchDetails = await this.getMatchDetails(match.matchId);
          return matchDetails;
        }),
      );
    }

    return {
      history,
      matches,
    };
  }

  /**
   *
   * @param {String} accountName - like 'dhko'
   * @returns {Object} data
   */
  async getPlayer(accountName) {
    this._assertReady();

    const playerDetails = await super.getPlayer(accountName);
    const ign = _.get(playerDetails, `[0].${HZ_PLAYER_NAME}`);

    const playerInfo = {
      [IGN]: ign, // in game name
      [DETAILS]: playerDetails,
      [MATCHES]: {},
      [HISTORY]: [],
      // TODO: for performance calculation purposes,
      // We should premptively sort some data
      // casuals: {
      //   wins: [],
      //   losses: [],
      // },
      // ranked: {
      //   wins: [],
      //   losses: [],
      // },
    };

    await this._set(`${PLAYERS}.${accountName}`, playerInfo);

    return playerInfo;
  }
}

export const smiteQLClient = new SmiteQL();
