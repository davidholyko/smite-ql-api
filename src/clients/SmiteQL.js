import _ from 'lodash';
import moment from 'moment';

import CONSTANTS from '../constants';
import HELPERS from '../helpers';

import { smiteApiClient } from './SmiteApi';
import { SmiteRedis } from './SmiteRedis';

const { SMITE_QL_KEYS, ERRORS, MOMENT, REGEX } = CONSTANTS;
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
  ACCOUNT_NUMBER,
  IGN,
  LAST_UPDATED,
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
  // ********************* SmiteQL Internal Methods ********************* //
  // ******************************************************************** //

  async _updatePlayerMatch(playerId, matchId, playerDetails, partyDetails) {
    try {
      const normalizedPlayerId = HELPERS.normalize(playerId, { isLowerCase: true, encase: true });
      const matchInfo = playerDetails[normalizedPlayerId];
      const victoryStatus = matchInfo.isVictory ? WINS : LOSSES;
      const matchQuality = matchInfo.isRanked ? RANKED : NORMAL;

      const playerMatchState = this.buildPlayerMatchState({ matchInfo, playerId, partyDetails });

      // append to RANKED/NORMAL and OVERALL
      await this._appendPlayer(playerId, `${matchQuality}.${victoryStatus}`, matchInfo.matchId);
      await this._appendPlayer(playerId, `${OVERALL}.${victoryStatus}`, matchInfo.matchId);
      await this._setPlayer(playerId, `${MATCHES}.${matchId}`, playerMatchState);

      console.info(`🌀🌀🌀 UPM_1: Updated match ${matchId} for ${playerId} 🌀🌀🌀`);
    } catch (error) {
      const errors = [
        `❌❌❌ Failed match generation for ${matchId} as player ${playerId} ❌❌❌`,
        error.message.split('\n'),
      ].join('\n');

      console.error(errors);
    }
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

    const playerState = await this._getPlayer(playerId);
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
    const doesPlayerMatchExist = await this._existsPlayer(playerId, `${MATCHES}.${matchId}`);
    const matchState = doesGlobalMatchExist && (await this._get(`${GLOBAL}.${RAW_MATCHES}.${matchId}`));
    const patchVersion = _.get(matchState, PATCH_VERSION) || (await this._getPatchVersion());

    if (doesGlobalMatchExist && doesPlayerMatchExist) {
      // if global match and player match exist, this match
      // was previously processed
      return await this._get(`${GLOBAL}.${MATCHES}.${matchId}`);
    }

    console.info(`🏢🏢🏢 GMD_1: Retrieving matchDetails for matchId: ${matchId} 🏢🏢🏢`);

    const rawMatchDetails = doesGlobalMatchExist ? matchState : await super.getMatchDetails(matchId);
    const partyDetails = HELPERS.processPartyDetails(rawMatchDetails);
    const levelDetails = HELPERS.processLevelDetails(rawMatchDetails);
    const playerDetails = HELPERS.processPlayerDetails(rawMatchDetails, patchVersion);

    // updates player.match with the match state object
    await this._updatePlayerMatch(playerId, matchId, playerDetails, partyDetails);

    if (!doesGlobalMatchExist) {
      // calculate stats from the perspective of the match
      const params = { playerDetails, partyDetails, levelDetails, patchVersion };
      const globalMatchState = this.buildGlobalMatchState(params);

      await this._set(`${GLOBAL}.${MATCHES}.${matchId}`, globalMatchState);
      await this._set(`${GLOBAL}.${RAW_MATCHES}.${matchId}`, rawMatchDetails);

      console.info(`🏤🏤🏤 GMD_2: Storing matchDetails for matchId: ${matchId} 🏤🏤🏤`);

      return globalMatchState;
    }
  }

  /**
   * gets a player's match history (upto last 50 matches). If the most recent
   * history is already in redis, it will not make any redis updates. If the player's
   * account information doesn't exist, it will fill that in
   * @param {String} playerId - like 'dhko'
   * @param {Object} options - optional args
   * @param {String | Number} options.platform - values can be a number (1) or string ('HIREZ')
   * @param {Boolean} options.forceUpdate -
   * @returns {Array<String>} - list of last matchIds (upto 50)
   */
  async getMatchHistory(playerId, options = {}) {
    console.info(`🥇🥇🥇 GMH_1: Starting match history process for ${playerId} 🥇🥇🥇`);

    const playerState = await this.getPlayer(playerId, options);

    // find a player's match history by their account number, like '31231241'
    // because a player's ign might not be consistent for console players
    // or players with special characters
    const rawMatchHistory = await super.getMatchHistory(playerState[ACCOUNT_NUMBER]);
    const prevMatches = _.pick(playerState, [MATCHES, HISTORY]);
    const newMatches = HELPERS.processMatchHistory(prevMatches, rawMatchHistory);

    console.info(`🥈🥈🥈 GMH_2: Found ${newMatches.length} new matches for ${playerId} 🥈🥈🥈`);

    if (!_.isEmpty(newMatches)) {
      // if player info history already exists, prepend the match
      // so that most recent match is at the start
      for (const matchId of newMatches) {
        await this._prependPlayer(playerId, `${HISTORY}`, matchId);
      }

      // Find match details for all matches information in parallel
      await Promise.all(
        _.map(newMatches, async (matchId) => {
          return await this.getMatchDetails(matchId, playerId);
        }),
      );
    }

    console.info(`🥉🥉🥉 GMH_3: Completed processing matches for ${playerId} 🥉🥉🥉`);

    return newMatches;
  }

  /**
   *
   * @param {String} playerId - an ign 'dhko' or playerNumber like '4553282'
   * @param {Object} options - optional args
   * @param {String} options.platform - like 'XBOX' or 'PS4'.
   * @param {Boolean} options.forceUpdate - whether to call Official Smite API
   * @returns {Object} data
   */
  async getPlayer(playerId, options = {}) {
    const { platform, forceUpdate = false } = options;
    const doesPlayerExist = await this._existsPlayer(playerId);
    let playerAccountId;
    let playerDetails;

    console.info(`🐕‍🦺🐕‍🦺🐕‍🦺 GPD_1: Getting details for ${playerId} 🐕‍🦺🐕‍🦺🐕‍🦺, forceUpdate: ${forceUpdate}`);

    if (!forceUpdate) {
      return await this._getPlayer(playerId);
    }

    if (_.includes(['XBOX', 'PS4', 'SWITCH'], platform)) {
      const playerByGameTag = await this.getPlayerIdsByGamerTag(playerId, platform);
      playerAccountId = _.get(playerByGameTag, '[0].player_id');
    }

    try {
      // if request to find latest data fails because of Official Smite API
      // fall back to whatever data we have available
      playerDetails = await super.getPlayer(playerAccountId || playerId);
    } catch (error) {
      console.error(`❌❌❌ GPD_1.5: An error has occured for details for ${playerId} ❌❌❌`);
      // fall back to data we already have if an update fails
      return await this._getPlayer(playerId);
    }

    console.info(`🦮🦮🦮 GPD_2: Retrieved details for ${playerId} 🦮🦮🦮`);

    if (_.isEmpty(playerDetails)) {
      throw new Error(`Player: ${playerId} does not exist.`);
    }

    if (_.get(playerDetails, '[0].ret_msg')) {
      // if the request for getting player JSON fails,
      // faill back to whatever data we have
      return await this._getPlayer(playerId);
    }

    if (doesPlayerExist) {
      // Update player details and last updated
      // but leave anything related to matches unchanged
      await this._setPlayer(playerId, `${DETAILS}`, _.first(playerDetails));
      await this._setPlayer(playerId, `${LAST_UPDATED}`, moment.utc().format(MOMENT.HUMAN_TIME_FORMAT));
    } else {
      const newPlayerState = this.buildPlayerState(playerDetails);
      await this._setPlayer(playerId, '', newPlayerState);
    }

    const playerState = await this._getPlayer(playerId);

    console.info(`🐩🐩🐩 GPD_3: Process complete for ${playerId} 🐩🐩🐩`);

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
      const history = await this._scanMatchHistory(playerId, options);
      const player = await this.getPlayer(playerId, _.get(options, 'platform'));

      return {
        ...history,
        player: {
          ...player.details,
          [IGN]: player[IGN],
          [LAST_UPDATED]: player[LAST_UPDATED],
        },
      };
    } catch (error) {
      return {
        error: true,
        message: `Player history not found for ${playerId}`,
        stack: error.stack.split('\n'),
      };
    }
  }

  /**
   *
   * @param {String} playerId - player name
   * @returns {Object} output
   */
  async regenerateMatches(playerId) {
    // delete all the matches and reset arrays
    await this._setPlayer(playerId, `${MATCHES}`, {});
    await this._setPlayer(playerId, `${OVERALL}`, { [WINS]: [], [LOSSES]: [] });
    await this._setPlayer(playerId, `${NORMAL}`, { [WINS]: [], [LOSSES]: [] });
    await this._setPlayer(playerId, `${RANKED}`, { [WINS]: [], [LOSSES]: [] });

    const playerState = await this._getPlayer(playerId);
    const history = _.get(playerState, HISTORY);

    await Promise.all(
      _.map(history, async (matchId) => {
        const rawMatchDetails = await this._get(`${GLOBAL}.${RAW_MATCHES}.${matchId}`);
        const patchVersion = await this._getPatchVersion();

        const partyDetails = HELPERS.processPartyDetails(rawMatchDetails);
        const playerDetails = HELPERS.processPlayerDetails(rawMatchDetails, patchVersion);

        await this._updatePlayerMatch(playerId, matchId, playerDetails, partyDetails);
      }),
    );

    console.info(`🧶🧶🧶 UPM_2: Updated ${history.length} matches for ${playerId} 🧶🧶🧶`);

    return {
      status: 'completed',
    };
  }

  /**
   * Method to regenerate all match state data from redisDB
   * Not accessible through API endpoint
   *
   * @returns {Object} output
   */
  async regenerateAllMatches() {
    const playerIds = await this._keys(`${PLAYERS}`);

    await Promise.all(
      _.map(playerIds, async (id) => {
        const playerId = _.get(id.match(REGEX.MATCH_BETWEEN_DOUBLE_UNDERSCRORE), '[1]');
        console.log(`🔥🔥🔥 REG_1: Regenerating all matches for ${playerId} 🔥🔥🔥`);
        await this.regenerateMatches(playerId);
      }),
    );

    console.log(`🌊🌊🌊 REG_2: Regenerating all matches complete! 🌊🌊🌊`);

    return {
      status: 'completed',
      response: playerIds,
    };
  }
}

export const smiteClient = new SmiteQL();
