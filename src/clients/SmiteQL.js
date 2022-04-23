import _ from 'lodash';

import CONSTANTS from '../constants';
import HELPERS from '../helpers';

import { smiteApiClient } from './SmiteApi';
import { SmiteRedis } from './SmiteRedis';

const { SMITE_QL_KEYS } = CONSTANTS;
const { WINS, LOSSES, RANKED, NORMAL, PLAYERS, MATCHES, HISTORY, GLOBAL } = SMITE_QL_KEYS;

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

      const playerMatchState = this.buildPlayerMatchState({
        matchInfo: newMatchInfo,
        playerId,
        partyDetails,
        teamDetails,
      });

      await this._append(`${PLAYERS}.${playerId}.${winLossPath}`, newMatchInfo.matchId);
      await this._set(`${PLAYERS}.${playerId}.${MATCHES}.${matchId}`, playerMatchState);
    }

    const globalMatchState = this.buildGlobalMatchState({ rawDetails: rawMatchDetails, partyDetails, teamDetails });
    await this._set(`${GLOBAL}.${MATCHES}.${matchId}`, globalMatchState);

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
    const playerState = this.buildPlayerState(playerDetails);

    await this._set(`${PLAYERS}.${playerId}`, playerState);

    return playerState;
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
