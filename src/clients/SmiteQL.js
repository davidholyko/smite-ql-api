import _ from 'lodash';

import CONSTANTS from '../constants';
import HELPERS from '../helpers';

import { smiteApiClient } from './SmiteApi';
import { SmiteRedis } from './SmiteRedis';

const { SMITE_QL_KEYS } = CONSTANTS;
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
  RAW,
  PATCH_VERSION,
  RAW_MATCHES,
  PLAYER,
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
    const matchState = doesGlobalMatchExist && (await this._get(`${GLOBAL}.${MATCHES}.${matchId}`));

    if (doesGlobalMatchExist && doesPlayerMatchExist) {
      // if global match and player match exist, this match
      // was previously processed
      return await this._get(`${GLOBAL}.${MATCHES}.${matchId}`);
    }

    if (doesGlobalMatchExist && !doesPlayerMatchExist) {
      // if global match exists and player match doesn't exist
      // this match was not yet processed for a player
      const match = await this._get(`${GLOBAL}.${MATCHES}.${matchId}`);
      const matchInfo = this.buildPlayerMatchState({ match: matchInfo, playerId, partyDetails: match.party });
      await this._set(`${PLAYERS}.${playerId}.${MATCHES}.${matchId}`, match[PLAYER][playerId]);
      return match;
    }

    const patchVersion = _.get(matchState, PATCH_VERSION) || (await this._getPatchVersion());
    const rawDetails = doesGlobalMatchExist ? _.get(matchState, RAW) : await super.getMatchDetails(matchId);
    const partyDetails = HELPERS.processPartyDetails(rawDetails);
    const levelDetails = HELPERS.processLevelDetails(rawDetails);
    const playerDetails = HELPERS.processPlayerDetails(rawDetails, patchVersion);

    // TODO: maybe logic for updating redisSB should be in in a smaller method
    // calculate stats from the perspective of the player
    const matchInfo = playerDetails[playerId];
    const victoryStatus = matchInfo.isVictory ? WINS : LOSSES;
    const matchType = matchInfo.isRanked ? RANKED : NORMAL;

    const matchParams = { matchInfo, playerId, partyDetails };
    const playerMatchState = this.buildPlayerMatchState(matchParams);

    // append to RANKED/NORMAL and OVERALL
    await this._append(`${PLAYERS}.${playerId}.${matchType}.${victoryStatus}`, matchInfo.matchId);
    await this._append(`${PLAYERS}.${playerId}.${OVERALL}.${victoryStatus}`, matchInfo.matchId);
    await this._set(`${PLAYERS}.${playerId}.${MATCHES}.${matchId}`, playerMatchState);

    // calculate stats from the perspective of the match
    const params = { playerDetails, partyDetails, levelDetails, patchVersion };
    const globalMatchState = this.buildGlobalMatchState(params);

    await this._set(`${GLOBAL}.${MATCHES}.${matchId}`, globalMatchState);
    await this._set(`${GLOBAL}.${RAW_MATCHES}.${matchId}`, rawDetails);

    console.info(`🏤🏤🏤 Successfully set matchInfo for matchId: ${matchId} 🏤🏤🏤`);

    return globalMatchState;
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
      await Promise.all(
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
