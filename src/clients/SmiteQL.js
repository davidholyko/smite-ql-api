import _ from 'lodash';

import CONSTANTS from '../constants';
import HELPERS from '../helpers';

import { smiteApiClient } from './SmiteApi';
import { SmiteRedis } from './SmiteRedis';

const { SMITE_QL_KEYS, ERRORS } = CONSTANTS;
const {
  WINS,
  LOSSES,
  RANKED,
  NORMAL,
  PLAYERS,
  MATCHES,
  HISTORY,
  GLOBAL,
  DETAILS,
  PATCH_VERSION,
  RAW_MATCHES,
  OVERALL,
} = SMITE_QL_KEYS;

/**
 * @class
 * @extends SmiteRedis
 */
export class SmiteQL extends SmiteRedis {
  constructor() {
    super();

    // for sandbox purposes
    this.smiteApi = smiteApiClient;
  }

  // ******************************************************************** //
  // ************************* SmiteQL Methods ************************** //
  // ******************************************************************** //

  /**
   *
   * @param {String} playerId - like 'dhko' or '4553282'
   * @param {Object} options - options
   * @param {Object} options.index - for pagination, get items 0-19 at index 1, 20-39 at index 2, etc...
   * @param {Object} options.limit - number of matches to scan
   * @returns {Object} output
   */
  async _scanMatchHistory(playerId, options = {}) {
    if (options.limit && options.index !== undefined) {
      throw new Error(ERRORS.SCAN_MATCH_HISTORY_FAILURE);
    }

    const playerState = await this._get(`${PLAYERS}.${playerId}`);
    const recentHistory = HELPERS.processRecentMatchHistory(playerState, options);

    return recentHistory;
  }

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
    const doesGlobalMatchExist = await this._exists(`${GLOBAL}.${MATCHES}.${matchId}`);
    const doesPlayerMatchExist = await this._exists(`${PLAYERS}.${playerId}.${MATCHES}.${matchId}`);
    const matchState = doesGlobalMatchExist && (await this._get(`${GLOBAL}.${RAW_MATCHES}.${matchId}`));
    const patchVersion = _.get(matchState, PATCH_VERSION) || (await this._getPatchVersion());

    if (doesGlobalMatchExist && doesPlayerMatchExist) {
      // if global match and player match exist, this match
      // was previously processed
      return await this._get(`${GLOBAL}.${MATCHES}.${matchId}`);
    }

    const rawMatchDetails = doesGlobalMatchExist ? matchState : await super.getMatchDetails(matchId);
    const partyDetails = HELPERS.processPartyDetails(rawMatchDetails);
    const levelDetails = HELPERS.processLevelDetails(rawMatchDetails);
    const playerDetails = HELPERS.processPlayerDetails(rawMatchDetails, patchVersion);

    // TODO: maybe logic for updating redisSB should be in in a smaller method
    // calculate stats from the perspective of the player
    const matchInfo = playerDetails[playerId];
    const victoryStatus = matchInfo.isVictory ? WINS : LOSSES;
    const matchType = matchInfo.isRanked ? RANKED : NORMAL;

    const playerMatchState = this.buildPlayerMatchState({ matchInfo, playerId, partyDetails });

    // append to RANKED/NORMAL and OVERALL
    await this._append(`${PLAYERS}.${playerId}.${matchType}.${victoryStatus}`, matchInfo.matchId);
    await this._append(`${PLAYERS}.${playerId}.${OVERALL}.${victoryStatus}`, matchInfo.matchId);
    await this._set(`${PLAYERS}.${playerId}.${MATCHES}.${matchId}`, playerMatchState);

    if (!doesGlobalMatchExist) {
      // calculate stats from the perspective of the match
      const params = { playerDetails, partyDetails, levelDetails, patchVersion };
      const globalMatchState = this.buildGlobalMatchState(params);

      await this._set(`${GLOBAL}.${MATCHES}.${matchId}`, globalMatchState);
      await this._set(`${GLOBAL}.${RAW_MATCHES}.${matchId}`, rawMatchDetails);

      console.info(`🏤🏤🏤 Successfully set matchInfo for matchId: ${matchId} 🏤🏤🏤`);

      return globalMatchState;
    }
  }

  /**
   * gets a player's match history (upto last 50 matches). If the most recent
   * history is already in redis, it will not make any redis updates. If the player's
   * account information doesn't exist, it will fill that in
   * @param {String} playerId - like 'dhko'
   * @returns {Array<String>} - list of last matchIds (upto 50)
   */
  async getMatchHistory(playerId) {
    const doesPlayerExist = await this._exists(`${PLAYERS}.${playerId}`);

    if (!doesPlayerExist) {
      await this.getPlayer(playerId);
    }

    const playerState = await this._get(`${PLAYERS}.${playerId}`);
    const rawMatchHistory = await super.getMatchHistory(playerId);
    const prevMatches = _.pick(playerState, [MATCHES, HISTORY]);
    const newMatches = HELPERS.processMatchHistory(prevMatches, rawMatchHistory);

    if (!_.isEmpty(newMatches) && _.isEmpty(playerState.history)) {
      // if player info has no history (this is the first time we are retreiving their info)
      // append each new match
      for (const matchId of newMatches) {
        await this._append(`${PLAYERS}.${playerId}.${HISTORY}`, matchId);
      }
    }

    if (!_.isEmpty(newMatches) && !_.isEmpty(playerState.history)) {
      // if player info history already exists, prepend the match
      // so that most recent match is at the start
      for (const matchId of newMatches) {
        await this._prepend(`${PLAYERS}.${playerId}.${HISTORY}`, matchId);
      }
    }

    if (!_.isEmpty(newMatches)) {
      // Find match details for all matches information in parallel
      await Promise.all(
        _.map(newMatches, async (matchId) => {
          return await this.getMatchDetails(matchId, playerId);
        }),
      );
    }

    return newMatches;
  }

  /**
   *
   * @param {String} playerId - an ign 'dhko' or playerNumber like '4553282'
   * @returns {Object} data
   */
  async getPlayer(playerId) {
    const doesPlayerExist = await this._exists(`${PLAYERS}.${playerId}`);
    const playerDetails = await super.getPlayer(playerId);

    if (_.isEmpty(playerDetails)) {
      throw new Error(`Player: ${playerId} does not exist.`);
    }

    if (doesPlayerExist) {
      // update player.<playerId>.details if the redis DB already knows about it
      await this._set(`${PLAYERS}.${playerId}.${DETAILS}`, _.first(playerDetails));
    } else {
      const player = this.buildPlayerState(playerDetails);
      await this._set(`${PLAYERS}.${playerId}`, player);
    }

    const playerState = await this._get(`${PLAYERS}.${playerId}`);

    return playerState;
  }

  // ******************************************************************** //
  // **********************  Public Access Methods ********************** //
  // ******************************************************************** //

  /**
   *
   * @param {String} path - path to data in redis
   * @returns {Object} output
   */
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

  /**
   *
   * @param {String} playerId - player name or account number
   * @param {Object} options - path to data in redis
   * @returns {Object} output
   */
  async getHistory(playerId, options) {
    try {
      return await this._scanMatchHistory(playerId, options);
    } catch (error) {
      return {
        error: true,
        message: error.message,
        stack: error.stack.split('\n'),
      };
    }
  }
}

export const smiteClient = new SmiteQL();
