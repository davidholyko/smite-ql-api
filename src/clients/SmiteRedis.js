import _ from 'lodash';
import moment from 'moment';

import CONSTANTS from '../constants';
import HELPERS from '../helpers';

import { redisClient } from './Redis';
import { SmiteApi } from './SmiteApi';

const { parsePlayerName } = HELPERS;

const { SMITE_QL_KEYS, SMITE_API_KEYS, ERRORS, MOMENT } = CONSTANTS;
const { ID } = SMITE_API_KEYS;
const {
  ROOT,
  ENTRY,
  WINS,
  LOSSES,
  RANKED,
  NORMAL,
  PLAYER,
  PLAYERS,
  MATCHES,
  HISTORY,
  DETAILS,
  GLOBAL,
  PATCH_VERSIONS,
  PATCH_VERSION,
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
  PARTY,
  LEVEL,
  RAW_MATCHES,
  OVERALL,
} = SMITE_QL_KEYS;

/**
 * @class
 * @extends SmiteApi
 */
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
   * @param {String} patchVersion - like '9.3'
   * @returns {void}
   */
  _assertPatchVersion(patchVersion) {
    if (!patchVersion) {
      throw new Error(ERRORS.PATCH_VERSION_NOT_SET);
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
    this.session_timestamp = null;
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
    const { version_string } = await this.getPatchInfo();
    const currentPatchInfo = await this._get(`${MISC}.${PATCH_VERSIONS}.${CURRENT_PATCH}`);
    const currentPatchVersion = _.get(currentPatchInfo, 'value');
    const patchVersion = HELPERS.parsePatchVersion(version_string);

    if (currentPatchVersion === patchVersion) {
      // if our latest patchVersion is already upto date
      // skip any updates to redis
      return patchVersion;
    }

    const patchVersionInfo = {
      value: patchVersion,
      timestamp: moment.utc(),
      timestamp_human: moment.utc().format(MOMENT.HUMAN_TIME_FORMAT),
    };

    // update redis and SmiteQL client
    await this._set(`${MISC}.${PATCH_VERSIONS}.${CURRENT_PATCH}`, patchVersionInfo);
    await this._prepend(`${MISC}.${PATCH_VERSIONS}.${PREVIOUS_PATCHES}`, patchVersionInfo);

    return patchVersionInfo.value;
  }

  /**
   * gets patch version from redis DB
   * @returns {String} - current patch version, like '9.3'
   */
  async _getPatchVersion() {
    const currentPatchInfo = await this._get(`${MISC}.${PATCH_VERSIONS}.${CURRENT_PATCH}`);
    const currentPatchVersion = _.get(currentPatchInfo, 'value');

    this._assertPatchVersion(currentPatchVersion);

    return currentPatchVersion;
  }

  /**
   * gets all items for current patch and stores information in redis.
   * @returns {Boolean} - whether items were was fetched and stored
   */
  async _getItems() {
    const patchVersion = await this._getPatchVersion();
    const isPopulated = await this._exists(`${GLOBAL}.${ITEMS}.${patchVersion}`);

    if (isPopulated) {
      return false;
    }

    const items = await this.getItems();
    await this._set(`${GLOBAL}.${ITEMS}.${patchVersion}`, {});

    await Promise.all(
      _.map(items, async (item) => {
        // replace spaces with '_' because redis cannot handle spaces in keys
        // some items start with * like '*Asi'
        const key = item.DeviceName.replaceAll(' ', '_').replaceAll('*', '');
        return await this._set(`${GLOBAL}.${ITEMS}.${patchVersion}.${key}`, item);
      }),
    );
  }

  /**
   * gets all gods for current patch and stores information in redis.
   * @returns {Boolean} - whether items were was fetched and stored
   */
  async _getGods() {
    const patchVersion = await this._getPatchVersion();
    const isPopulated = await this._exists(`${GLOBAL}.${GODS}.${patchVersion}`);

    if (isPopulated) {
      return false;
    }

    const gods = await this.getGods();
    await this._set(`${GLOBAL}.${GODS}.${patchVersion}`, {});

    await Promise.all(
      _.map(gods, async (godDetails) => {
        const god = godDetails.Name.replaceAll(' ', '_');
        return await this._set(`${GLOBAL}.${GODS}.${patchVersion}.${god}`, godDetails);
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

    console.info('🚀🚀🚀 SmiteRedis is ready 🚀🚀🚀');

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
          // example: { value: '9.3', timestamp: 1322312 }
          [CURRENT_PATCH]: null,
          // example: [{ value: '9.3', timestamp: 1322312 }, { value: '9.2', timestamp: 1222312 }]
          [PREVIOUS_PATCHES]: [],
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
        [RAW_MATCHES]: {
          // example:
          // key is a matchId
          // value is data from 'getMatchDetails'
        },
        [MATCHES]: {
          // example:
          // key is a matchId
          // value is data calculated from 'getMatchDetails'
          //
          // 1232511801: {
          //   party: {}, // party details for a match calculated by SmiteQL
          //   team: {}, // team details for a match calculated by SmiteQL
          //   level: {}, // level details for a match calculated by SmiteQL
          //   player: {}
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
    // hz_player_name exists for PC players
    // hz_gamer_tag exists for console players
    const playerName = _.get(player, 'hz_player_name') || _.get(player, 'hz_gamer_tag');

    const initialPlayerState = {
      [SCHEMA_VERSION]: '1.0.0',
      [IGN]: parsePlayerName(playerName), // in game name, like 'dhko'
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
      [OVERALL]: {
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
  buildPlayerMatchState({ matchInfo, playerId, partyDetails }) {
    const { isVictory } = matchInfo;
    const allies = _.get(partyDetails, `parties.${isVictory ? 'winners' : 'losers'}`, {});
    const enemies = _.get(partyDetails, `parties.${isVictory ? 'losers' : 'winners'}`, {});
    const party = _.get(partyDetails, `parties.players.${playerId}`, {});

    const playerMatchState = {
      ...matchInfo,
      [SCHEMA_VERSION]: '1.0.0',
      allies,
      enemies,
      party,
    };

    return playerMatchState;
  }

  /**
   *
   * @param {Object} params - params
   * @param {Array<Object>} params.rawDetails - Smite API raw matchDetails array
   * @param {Object} params.partyDetails - party details
   * @returns {Object} data
   */
  buildGlobalMatchState({ playerDetails, partyDetails, levelDetails, patchVersion }) {
    const globalMatchState = {
      [SCHEMA_VERSION]: '1.0.0',
      [PARTY]: partyDetails,
      [LEVEL]: levelDetails,
      [PLAYER]: playerDetails,
      [PATCH_VERSION]: patchVersion,
    };

    return globalMatchState;
  }
}

export const smiteRedisClient = new SmiteRedis();
