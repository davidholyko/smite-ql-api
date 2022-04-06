import _ from 'lodash';

import CONSTANTS from '../constants';
import HELPERS from '../helpers';

import { BaseSmiteClient } from './BaseSmiteClient';
import RedisClient from './RedisClient';

const { REDIS, SMITE_QL } = CONSTANTS;
const { ENTRY, ROOT, PLAYERS, MATCHES, HISTORY, DETAILS, GLOBALS } = REDIS;
const { IGN, HZ_PLAYER_NAME } = SMITE_QL;

export class SmiteApiClient extends BaseSmiteClient {
  constructor() {
    super();
    this.redisClient = RedisClient;
    this.isReady = false;
  }

  /**
   * throws error if SmiteApiClient is not ready
   * @returns {void}
   */
  _assertReady() {
    if (!this.isReady) {
      throw new Error('RedisClient is not ready. Call async function SmiteApiClient.ready()');
    }
  }

  /**
   *
   * @param {String} path - path to object in redis
   * @returns {Boolean} response - true or false
   */
  async _exists(path) {
    const response = await this.redisClient.json.type(ENTRY, path);
    return !!response;
  }

  /**
   *
   * @param {String} path - path to object in redis
   * @returns {Object} data
   */
  async _get(path) {
    const data = await this.redisClient.json.get(ENTRY, { path });
    return data;
  }

  /**
   *
   * @param {String} path - path to object
   * @param {Object} data - data
   * @returns {Object} data
   */
  async _set(path, data) {
    const output = await this.redisClient.json.set(ENTRY, path, data);
    return output;
  }

  /**
   *
   * @param {Number} matchId - like 1232096830
   * @returns {Array<Object>} - data
   */
  async getMatchDetails(matchId) {
    this._assertReady();

    const data = await super.getMatchDetails(matchId);
    await this.redisClient.json.set(ENTRY, `${GLOBALS}.${MATCHES}.${matchId}`, data);

    return data;
  }

  /**
   *
   * @param {String} accountName - like 'dhko'
   * @returns {Object} - data
   */
  async getMatchHistory(accountName) {
    this._assertReady();

    const doesAccountExist = await this._exists(`${PLAYERS}.${accountName}`);

    if (!doesAccountExist) {
      await this.getPlayer(accountName);
    }

    const playerDetails = await this._get(`${PLAYERS}.${accountName}`);
    const matchHistory = await super.getMatchHistory(accountName);

    const { history, matches, hasDiff } = HELPERS.processMatchHistory(playerDetails, matchHistory);

    if (hasDiff) {
      await this._set(`${PLAYERS}.${accountName}.${HISTORY}`, history);
      await this._set(`${PLAYERS}.${accountName}.${MATCHES}`, matches);
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

    const data = {
      [IGN]: ign, // in game name
      [DETAILS]: playerDetails,
      [MATCHES]: {},
      [HISTORY]: [],
    };

    await this._set(`${PLAYERS}.${accountName}`, data);

    return data;
  }

  /**
   * Sets up top level schema for redis db
   * @returns {void}
   */
  async ready() {
    this.isReady = true;

    const doesRootExist = await this._exists(ROOT);

    // if redis DB already exists, we do not need to remake the initial state
    if (doesRootExist) {
      return;
    }

    const initialState = {
      players: {
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
      global: {
        matches: {
          // example:
          // key is a matchId
          // value is data from 'getMatchDetails'
          //
          // 1232511801: [{}, {}, {}] // array of objects which are details for each player
        },
      },
    };

    await this._set(ROOT, initialState);
  }
}

const client = new SmiteApiClient();

export default client;
