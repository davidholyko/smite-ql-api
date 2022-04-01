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

  _assertReady() {
    if (!this.isReady) {
      throw new Error('RedisClient is not ready. Call async function SmiteApiClient.ready()');
    }
  }

  async getMatchDetails(accountName) {
    this._assertReady();

    const data = await super.getPlayer(accountName);
    await this.redisClient.json.set(ENTRY, `${MATCH_DETAILS}.${accountName}`, data);

    return data;
  }

  async getMatchHistory(matchId) {
    this._assertReady();

    const data = await super.getPlayer(matchId);
    await this.redisClient.json.set(ENTRY, `${MATCHES}.${matchId}`, data);

    return data;
  }

  async getPlayer(accountName) {
    this._assertReady();

    const data = await super.getPlayer(accountName);
    await this.redisClient.json.set(ENTRY, `${PLAYERS}.${accountName}`, data);

    return data;
  }

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
