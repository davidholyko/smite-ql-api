import _ from 'lodash';

import CONSTANTS from '../constants';
import HELPERS from '../helpers';

import { redisClient } from './Redis';
import { SmiteApi } from './SmiteApi';

const { parsePlayerName } = HELPERS;

const { SMITE_QL_KEYS, SMITE_API_KEYS, ERRORS } = CONSTANTS;
const { ID } = SMITE_API_KEYS;
const {
  ROOT,
  ENTRY,
  WINS,
  LOSSES,
  RANKED,
  NORMAL,
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
  ACCOUNT_NUMBER,
  GODS,
  SCHEMA_VERSIONS,
  SCHEMA_VERSION,
  CURRENT_SCHEMA,
  PREVIOUS_SCEHMA,
  RAW,
  TEAM,
  PARTY,
} = SMITE_QL_KEYS;

export class SmiteRedis extends SmiteApi {
  constructor() {
    super();

    // clients
    this.redis = redisClient;

    // internal state
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

    const initialState = this.buildRootState();
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
    const currentPatch = await this._get(`${MISC}.${PATCH_VERSIONS}.${CURRENT_PATCH}`);

    if (currentPatch === patchVersion) {
      // if our latest patchVersion is already upto date
      // skip any updates to redis
      return patchVersion;
    }

    // update redis and SmiteQL client
    await this._set(`${MISC}.${PATCH_VERSIONS}.${CURRENT_PATCH}`, patchVersion);
    await this._prepend(`${MISC}.${PATCH_VERSIONS}.${PREVIOUS_PATCHES}`, patchVersion);

    return patchVersion;
  }

  /**
   * gets patch version from redis DB
   * @returns {String} - current patch version, like '9.3'
   */
  async _getPatchVersion() {
    const currentPatch = await this._get(`${MISC}.${PATCH_VERSIONS}.${CURRENT_PATCH}`);

    this._assertPatchVersion(currentPatch);

    return currentPatch;
  }

  /**
   * gets all items for current patch and stores information in redis.
   * @returns {Boolean} - whether items were was fetched and stored
   */
  async _getItems() {
    this._assertReady();

    const patchVersion = await this._getPatchVersion();
    const isPopulated = await this._exists(`${GLOBAL}.${ITEMS}.${patchVersion}`);

    if (isPopulated) {
      return false;
    }

    const items = await this.getItems();

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
  async _getGods() {
    this._assertReady();

    const patchVersion = await this._getPatchVersion();
    const isPopulated = await this._exists(`${GLOBAL}.${GODS}.${patchVersion}`);

    if (isPopulated) {
      return false;
    }

    const gods = await this.getGods();

    // Find match details for all matches information in parallel
    await Promise.allSettled(
      _.map(gods, async (god) => {
        const key = god.Name;
        return await this._set(`${GLOBAL}.${GODS}.${patchVersion}.${key}`, god);
      }),
    );

    return true;
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
    await this._getGods();
    await this._getItems();

    return readyStatus;
  }

  // ******************************************************************** //
  // ********************** Redis State Builders ************************ //
  // ******************************************************************** //

  /**
   * Builds an object for initial state of redis DB
   * @returns {Object} redis state
   */
  buildRootState() {
    const initialState = {
      [MISC]: {
        // schemaVersion refers to version for all JSON and Array shapes
        // The shapes for objects could change over time and when those updates
        // hit production, the old redis DB info has to be updated to the latest schema
        [SCHEMA_VERSIONS]: {
          [CURRENT_SCHEMA]: '1.0.0',
          [PREVIOUS_SCEHMA]: [],
        },
        [PATCH_VERSIONS]: {
          [CURRENT_PATCH]: null, // like '9.3'
          [PREVIOUS_PATCHES]: [], // like ['9.3', '9.2']
        },
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
        [GODS]: {
          // example:
          // key is a patch version
          //
          // '9.3': {
          //   'Thor': {}
          // }
        },
      },
    };

    return initialState;
  }

  /**
   * builds initial state for a player
   * @param {Array<Object> | Object} playerDetails - an array with one item for player details
   * @returns {Object} playerState
   */
  buildPlayerState(playerDetails) {
    const player = _.isArray(playerDetails) ? _.first(playerDetails) : playerDetails;

    const initialPlayerState = {
      [SCHEMA_VERSION]: '1.0.0',
      [IGN]: parsePlayerName(player), // in game name, like 'dhko'
      [ACCOUNT_NUMBER]: player[ID], // associated number, like 4553282
      [DETAILS]: player,
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

    return initialPlayerState;
  }

  /**
   * builds initial state for a match for a specific player
   * @param {Object} params -
   * @param {Object} params.matchInfo -
   * @param {String} params.playerId -
   * @param {Object} params.partyDetails -
   * @param {Object} params.teamDetails -
   * @returns {Object} playerState
   */
  buildPlayerMatchState({ matchInfo, playerId, partyDetails, teamDetails }) {
    const { isVictory } = matchInfo;
    const enemies = isVictory ? teamDetails.teams.losers : teamDetails.teams.winners;
    const allies = isVictory ? teamDetails.teams.winners : teamDetails.teams.losers;
    const party = _.get(partyDetails, `partiesByPlayerIds.${playerId}`, {});

    const playerMatchState = {
      ...matchInfo,
      [SCHEMA_VERSION]: '1.0.0',
      party,
      enemies,
      allies,
    };

    return playerMatchState;
  }

  /**
   *
   * @param {Object} params - params
   * @param {Array<Object>} params.rawDetails - Smite API raw matchDetails array
   * @param {Object} params.partyDetails - party details
   * @param {Object} params.teamDetails - team details
   * @returns {Object} data
   */
  buildGlobalMatchState({ rawDetails, partyDetails, teamDetails }) {
    const globalMatchState = {
      [SCHEMA_VERSION]: '1.0.0',
      [RAW]: rawDetails,
      [PARTY]: partyDetails,
      [TEAM]: teamDetails,
    };

    return globalMatchState;
  }
}

export const smiteRedisClient = new SmiteRedis();
