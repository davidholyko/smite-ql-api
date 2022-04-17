import _ from 'lodash';

import CONSTANTS from '../constants';
import HELPERS from '../helpers';

import { redisClient } from './Redis';
import { smiteApiClient, SmiteApi } from './SmiteApi';

const { SMITE_QL_KEYS, SMITE_RAW_KEYS, ERRORS } = CONSTANTS;
const {
  WINS,
  LOSSES,
  RANKED,
  NORMAL,
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
  IGN,
  CURRENT_PATCH,
  PREVIOUS_PATCHES,
} = SMITE_QL_KEYS;
const { HZ_PLAYER_NAME, PLAYER_ID } = SMITE_RAW_KEYS;
const { CLIENT_NOT_READY } = ERRORS;

export class SmiteQL extends SmiteApi {
  constructor() {
    super();

    // clients
    this.redis = redisClient;
    this.smiteApi = smiteApiClient; // for sandbox purposes

    // internal properties
    this.isReady = false;
    this.patchVersion = null;
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
   * @param {Any} value -
   * @returns {String} response
   */
  async _prepend(path, value) {
    const index = 0;
    const response = await this.redis.json.arrInsert(ENTRY, path, index, value);
    return response;
  }

  /**
   *
   * @param {String} path - path to object in redis
   * @param {Any} value -
   * @returns {String} response
   */
  async _append(path, value) {
    const response = await this.redis.json.arrAppend(ENTRY, path, value);
    return response;
  }

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
   * @returns {String} response
   */
  async _get(path) {
    const data = await this.redis.json.get(ENTRY, { path });
    return data;
  }

  /**
   *
   * @param {String} path - path to object
   * @param {Object} data - data
   * @returns {String} response
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
        //   ranked: { wins: [], losses: [] }
        //   normal: { wins: [], losses: [] }
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
          [CURRENT_PATCH]: null, // like '9.3'
          [PREVIOUS_PATCHES]: [], // like ['9.3', '9.2']
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
  async _updatePatchVersion() {
    const { version_string: patchVersion } = await this.getPatchInfo();
    const currentPatch = await this._get(`${GLOBAL}.${PATCH_VERSIONS}.currentPatch`);

    if (currentPatch === patchVersion) {
      // if our latest patchVersion is already upto date
      // skip any updates to redis
      return patchVersion;
    }

    // update redis and SmiteQL client
    await this._set(`${GLOBAL}.${PATCH_VERSIONS}.${CURRENT_PATCH}`, patchVersion);
    await this._prepend(`${GLOBAL}.${PATCH_VERSIONS}.${PREVIOUS_PATCHES}`, patchVersion);
    this.patchVersion = patchVersion;

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
   * @param {?String} playerId - like 'dhko'
   * @returns {Array<Object>} - data
   */
  async getMatchDetails(matchId, playerId) {
    this._assertReady();

    const doesMatchExist = await this._exists(`${GLOBAL}.${MATCHES}.${matchId}`);

    if (doesMatchExist) {
      return await this._get(`${GLOBAL}.${MATCHES}.${matchId}`);
    }

    const rawMatchDetails = await super.getMatchDetails(matchId);
    const partyDetails = HELPERS.processPartyDetails(rawMatchDetails);

    if (playerId) {
      const newMatchInfo = HELPERS.processMatchDetails(rawMatchDetails, playerId, this.patchVersion);
      const winLossPath = `${newMatchInfo.isRanked ? RANKED : NORMAL}.${newMatchInfo.isVictory ? WINS : LOSSES}`;

      await this._append(`${PLAYERS}.${playerId}.${winLossPath}`, newMatchInfo.matchId);
      await this._set(`${PLAYERS}.${playerId}.${MATCHES}.${matchId}`, newMatchInfo);
    }

    await this._set(`${GLOBAL}.${MATCHES}.${matchId}`, { raw: rawMatchDetails, partyDetails });

    return {
      raw: rawMatchDetails,
      partyDetails,
    };
  }

  /**
   * gets a player's match history (upto last 50 matches). If the most recent
   * history is already in redis, it will not make any redis updates. If the player's
   * account information doesn't exist, it will fill that in
   * @param {String} playerId - like 'dhko'
   * @returns {Object} - data
   */
  async getMatchHistory(playerId) {
    this._assertReady();

    const doesAccountExist = await this._exists(`${PLAYERS}.${playerId}`);

    if (!doesAccountExist) {
      await this.getPlayer(playerId);
    }

    const playerInfo = await this._get(`${PLAYERS}.${playerId}`);
    const rawMatchHistory = await super.getMatchHistory(playerId);
    const prevMatchInfo = _.pick(playerInfo, [MATCHES, HISTORY, RANKED, NORMAL]);
    const newMatchHistory = HELPERS.processMatchHistory(prevMatchInfo, rawMatchHistory, this.patchVersion);

    if (!_.isEmpty(newMatchHistory)) {
      for (const matchId of newMatchHistory) {
        await this._append(`${PLAYERS}.${playerId}.${HISTORY}`, matchId);
      }

      // Find match details for all matches and request
      // that information in parallel
      await Promise.allSettled(
        _.map(newMatchHistory, async (matchId) => {
          const matchDetails = await this.getMatchDetails(matchId, playerId);
          return matchDetails;
        }),
      );
    }

    return newMatchHistory;
  }

  /**
   *
   * @param {String} playerId - like 'dhko'
   * @returns {Object} data
   */
  async getPlayer(playerId) {
    this._assertReady();

    const playerDetails = await super.getPlayer(playerId);

    const playerInfo = {
      [IGN]: _.get(playerDetails, `[0].${HZ_PLAYER_NAME}`), // in game name
      [DETAILS]: _.first(playerDetails),
      [MATCHES]: {},
      [HISTORY]: [],
      [NORMAL]: {
        [WINS]: [],
        [LOSSES]: [],
      },
      [RANKED]: {
        [WINS]: [],
        [LOSSES]: [],
      },
    };

    await this._set(`${PLAYERS}.${PLAYER_ID}`, playerInfo);

    return playerInfo;
  }
}

export const smiteQLClient = new SmiteQL();
