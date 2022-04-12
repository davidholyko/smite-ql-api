import _ from 'lodash';

import CONSTANTS from '../constants';
import HELPERS from '../helpers';

import baseClient, { BaseSmiteClient } from './BaseSmiteClient';
import RedisClient from './RedisClient';

const { REDIS, SMITE_QL, ERRORS } = CONSTANTS;
const { ENTRY, ROOT, PLAYERS, MATCHES, HISTORY, DETAILS, GLOBAL } = REDIS;
const { IGN, HZ_PLAYER_NAME } = SMITE_QL;
const { CLIENT_NOT_READY } = ERRORS;

export class SmiteApiClient extends BaseSmiteClient {
  constructor() {
    super();
    this.redisClient = RedisClient;
    this.baseClient = baseClient; // for sandbox purposes
    this.isReady = false;
  }

  /**
   * throws error if SmiteApiClient is not ready
   * @returns {void}
   */
  _assertReady() {
    if (!this.isReady) {
      throw new Error(CLIENT_NOT_READY);
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
   * resets database and smite client state
   * @returns {void}
   */
  async _reset() {
    await this.redisClient.flushAll();
    this.isReady = false;
  }

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
    };

    await this._set(`${PLAYERS}.${accountName}`, playerInfo);

    return playerInfo;
  }

  /**
   * Sets up top level schema for redis db
   * @returns {Boolean} - true if ready was already called
   *                    - false if ready was not already called
   */
  async ready() {
    this.isReady = true;

    const doesRootExist = await this._exists(ROOT);

    // if redis DB already exists, we do not need to remake the initial state
    if (doesRootExist) {
      return true;
    }

    const initialState = {
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
      },
    };

    await this._set(ROOT, initialState);

    return false;
  }
}

const client = new SmiteApiClient();

export default client;
