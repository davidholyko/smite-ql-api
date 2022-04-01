import { BaseSmiteClient } from './BaseSmiteClient';
import RedisClient from './RedisClient';

import CONSTANTS from '../constants';

const { REDIS } = CONSTANTS;
const { ENTRY, ROOT, PLAYERS, MATCHES, MATCH_DETAILS } = REDIS;

export class SmiteApiClient extends BaseSmiteClient {
  constructor() {
    super();
    this.redisClient = RedisClient;
    this.isReady = false;
  }

  /**
   * throws error is SmiteApiClient is not ready
   * @returns {Void} - returns nothing
   */
  _assertReady() {
    if (!this.isReady) {
      throw new Error('RedisClient is not ready. Call async function SmiteApiClient.ready()');
    }
  }

  /**
   *
   * @param {Number} matchId - like 1232096830
   * @returns {Array<Object>} - data
   */
  async getMatchDetails(matchId) {
    this._assertReady();

    const data = await super.getMatchDetails(matchId);
    await this.redisClient.json.set(ENTRY, `${MATCH_DETAILS}.${matchId}`, data);

    return data;
  }

  /**
   * Returns last 50 matches of a player
   * @param {String} accountName - like 'dhko'
   * @returns {Array<Object>} - data
   */
  async getMatchHistory(accountName) {
    this._assertReady();

    const data = await super.getMatchHistory(accountName);
    await this.redisClient.json.set(ENTRY, `${MATCHES}.${accountName}`, data);

    return data;
  }

  /**
   *
   * @param {String} accountName - like 'dhko'
   * @returns {Object} - data
   */
  async getPlayer(accountName) {
    this._assertReady();

    const data = await super.getPlayer(accountName);
    await this.redisClient.json.set(ENTRY, `${PLAYERS}.${accountName}`, data);

    return data;
  }

  /**
   * Sets up top level schema for redis db
   * @returns {void}
   */
  async ready() {
    this.isReady = true;

    await this.redisClient.json.set(ENTRY, ROOT, {
      players: {},
      matches: {},
      matchDetails: {},
    });
  }
}

const client = new SmiteApiClient();

export default client;
