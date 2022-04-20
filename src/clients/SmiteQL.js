import _ from 'lodash';

import CONSTANTS from '../constants';
import HELPERS from '../helpers';

import { redisClient } from './Redis';
import { smiteApiClient, SmiteApi } from './SmiteApi';

const { SMITE_QL_KEYS, ERRORS } = CONSTANTS;
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
  GLOBAL,
  PATCH_VERSIONS,
  CURRENT_PATCH,
  PREVIOUS_PATCHES,
  RAW,
  PARTY,
  ITEMS,
  TEAM,
  GODS,
} = SMITE_QL_KEYS;

export class SmiteQL extends SmiteApi {
  constructor() {
    super();

    // clients
    this.redis = redisClient;
    this.smiteApi = smiteApiClient; // for sandbox purposes

    // internal properties
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
      throw new Error(ERRORS.CLIENT_NOT_READY);
    }
  }

  /**
   * @param {String} patchVersion - like '9.3'
   * @returns {void}
   */
  _assertPatchVersion(patchVersion) {
    if (!patchVersion) {
      throw new Error('Patch version has not been set.');
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
   * @returns {Boolean} - whether initialState was created
   */
  async _createInitialState() {
    const doesRootExist = await this._exists(ROOT);

    if (doesRootExist) {
      // TODO: later when we have different schema versions,
      // we can update the state from here
      return false;
    }

    const initialState = HELPERS.buildRootState();
    await this._set(ROOT, initialState);

    return true;
  }

  /**
   * updates globals and redis with patchInfo passed in or
   * retrieves latest patchInfo from Smite API to update with
   * @param {?Object} patchInfo - optionally pass in patchInfo
   * @returns {String} patchVersion
   */
  async _updatePatchVersion() {
    const { version_string: patchVersion } = await this.getPatchInfo();
    const currentPatch = await this._get(`${GLOBAL}.${PATCH_VERSIONS}.${CURRENT_PATCH}`);

    if (currentPatch === patchVersion) {
      // if our latest patchVersion is already upto date
      // skip any updates to redis
      return patchVersion;
    }

    // update redis and SmiteQL client
    await this._set(`${GLOBAL}.${PATCH_VERSIONS}.${CURRENT_PATCH}`, patchVersion);
    await this._prepend(`${GLOBAL}.${PATCH_VERSIONS}.${PREVIOUS_PATCHES}`, patchVersion);

    return patchVersion;
  }

  /**
   * gets patch version from redis DB
   * @returns {String} - current patch version, like '9.3'
   */
  async _getPatchVersion() {
    const currentPatch = await this._get(`${GLOBAL}.${PATCH_VERSIONS}.${CURRENT_PATCH}`);

    this._assertPatchVersion(currentPatch);

    return currentPatch;
  }

  /**
   * Sets up top level schema for redis db
   * @returns {Boolean} - true if ready was already called
   *                    - false if ready was not already called
   */
  async ready() {
    const readyStatus = this.isReady;

    this.isReady = true;

    await this._createInitialState();
    await this._updatePatchVersion();
    await this.getGods();
    await this.getItems();

    return readyStatus;
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
   * @returns {Object} - data
   */
  async getMatchDetails(matchId, playerId) {
    this._assertReady();

    const doesMatchExist = await this._exists(`${GLOBAL}.${MATCHES}.${matchId}`);

    if (doesMatchExist) {
      return await this._get(`${GLOBAL}.${MATCHES}.${matchId}`);
    }

    const rawMatchDetails = await super.getMatchDetails(matchId);
    const partyDetails = HELPERS.processPartyDetails(rawMatchDetails);
    const teamDetails = HELPERS.processTeamDetails(rawMatchDetails);

    if (playerId) {
      // TODO: associate a player with another player's match
      // if already exists and skip fetching
      const patchVersion = await this._getPatchVersion();
      const newMatchInfo = HELPERS.processSmiteQLMatch(rawMatchDetails, playerId, patchVersion);
      const winLossPath = `${newMatchInfo.isRanked ? RANKED : NORMAL}.${newMatchInfo.isVictory ? WINS : LOSSES}`;

      const data = HELPERS.buildPlayerMatchState({
        matchInfo: newMatchInfo,
        playerId,
        partyDetails,
        teamDetails,
      });

      await this._append(`${PLAYERS}.${playerId}.${winLossPath}`, newMatchInfo.matchId);
      await this._set(`${PLAYERS}.${playerId}.${MATCHES}.${matchId}`, data);
    }

    await this._set(`${GLOBAL}.${MATCHES}.${matchId}`, { raw: rawMatchDetails, partyDetails });

    return {
      [RAW]: rawMatchDetails,
      [PARTY]: partyDetails,
      [TEAM]: teamDetails,
    };
  }

  /**
   * gets a player's match history (upto last 50 matches). If the most recent
   * history is already in redis, it will not make any redis updates. If the player's
   * account information doesn't exist, it will fill that in
   * @param {String} playerId - like 'dhko'
   * @returns {Array<String>} - list of last matchIds (upto 50)
   */
  async getMatchHistory(playerId) {
    this._assertReady();

    const doesAccountExist = await this._exists(`${PLAYERS}.${playerId}`);

    if (!doesAccountExist) {
      await this.getPlayer(playerId);
    }

    const patchVersion = await this._getPatchVersion();
    const playerInfo = await this._get(`${PLAYERS}.${playerId}`);
    const rawMatchHistory = await super.getMatchHistory(playerId);
    const prevMatchInfo = _.pick(playerInfo, [MATCHES, HISTORY, RANKED, NORMAL]);
    const newMatchHistory = HELPERS.processMatchHistory(prevMatchInfo, rawMatchHistory, patchVersion);

    if (!_.isEmpty(newMatchHistory)) {
      for (const matchId of newMatchHistory) {
        await this._append(`${PLAYERS}.${playerId}.${HISTORY}`, matchId);
      }

      // Find match details for all matches information in parallel
      await Promise.allSettled(
        _.map(newMatchHistory, async (matchId) => {
          return await this.getMatchDetails(matchId, playerId);
        }),
      );
    }

    return newMatchHistory;
  }

  /**
   *
   * @param {String} playerId - an ign 'dhko' or playerNumber like '4553282'
   * @returns {Object} data
   */
  async getPlayer(playerId) {
    this._assertReady();

    const playerDetails = await super.getPlayer(playerId);
    const playerState = HELPERS.buildPlayerState(playerDetails);

    await this._set(`${PLAYERS}.${playerId}`, playerState);

    return playerState;
  }

  /**
   * gets all items for current patch and stores information in redis.
   * @returns {Boolean} - whether items were was fetched and stored
   */
  async getItems() {
    this._assertReady();

    const patchVersion = await this._getPatchVersion();
    const isPopulated = await this._exists(`${GLOBAL}.${ITEMS}.${patchVersion}`);

    if (isPopulated) {
      return false;
    }

    const items = await super.getItems();

    // Find match details for all matches information in parallel
    await Promise.allSettled(
      _.map(items, async (item) => {
        const key = item.DeviceName;
        return await this._set(`${GLOBAL}.${ITEMS}.${patchVersion}.${key}`, item);
      }),
    );
  }

  /**
   * gets all gods for current patch and stores information in redis.
   * @returns {Boolean} - whether items were was fetched and stored
   */
  async getGods() {
    this._assertReady();

    const patchVersion = await this._getPatchVersion();
    const isPopulated = await this._exists(`${GLOBAL}.${GODS}.${patchVersion}`);

    if (isPopulated) {
      return false;
    }

    const gods = await super.getGods();

    // Find match details for all matches information in parallel
    await Promise.allSettled(
      _.map(gods, async (god) => {
        const key = god.Name;
        return await this._set(`${GLOBAL}.${GODS}.${patchVersion}.${key}`, god);
      }),
    );

    return true;
  }

  // ******************************************************************** //
  // **********************  Public Access Methods ********************** //
  // ******************************************************************** //

  async get(path) {
    try {
      return await this._get(path);
    } catch (error) {
      return {
        error: true,
        message: error.message,
        stack: error.stack,
      };
    }
  }
}

export const smiteQLClient = new SmiteQL();
