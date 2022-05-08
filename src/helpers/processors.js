/**
 * @file
 * processors are meant to take raw data from Smite Official API
 * and convert it to something that has more meaning for SmiteQL
 */

import _ from 'lodash';

import CONSTANTS from '../constants';

import { parseIgn } from './parsers';
import { toSmiteQLMatch } from './transformers';

const { SMITE_API_KEYS, SMITE_QL_KEYS, PORTALS } = CONSTANTS;
const { MATCH, PARTY_ID } = SMITE_API_KEYS;
const { NORMAL, RANKED, OVERALL, WINS, LOSSES, MATCHES, HISTORY } = SMITE_QL_KEYS;

/**
 * Compares match history of new match history with old. If there are new matches, loads that
 * into an object to update redis DB with.
 * @param {Object} prevMatches - object with matches, history
 * @param {Object} latestMatches - object with matches and history. History is in order of most recent games at beginning
 * @returns {Array<String>} prevMatches
 */
export const processMatchHistory = (prevMatches, latestMatches) => {
  // if an account hasn't play in a long time, they have no available match history
  // and the matchId will be 0 with a return message saying no match history
  const returnMessage = _.get(latestMatches, '[0].ret_msg') || '';
  const firstMatchId = _.get(latestMatches, `[0][${MATCH}]`);
  const hasDiff = _.get(prevMatches.matches, firstMatchId);
  const newMatches = [];

  if (returnMessage.startsWith('No Match History')) {
    return [];
  }

  if (hasDiff) {
    // if the first match in the latestMatches already exists
    // in the previous match info, the rest of the matches
    // will also exist.
    return [];
  }

  for (const match of latestMatches) {
    if (_.get(prevMatches.matches, match[MATCH])) {
      // if we find a match in latestMatches that already exists,
      // the rest of the matches in latestMatches have already been
      // added to redis DB. we do not need to keep adding matches

      break;
    }

    newMatches.push(match[MATCH]);
  }

  return newMatches;
};

/**
 *
 * @param {Array<Object>} rawMatchDetails - raw matchDetails from Smite API
 * @param {String} patchVersion - patchVersion at the time
 * @returns {Object} players
 */
export const processPlayerDetails = (rawMatchDetails, patchVersion) => {
  const players = {
    // player_1: {}
  };

  _.forEach(rawMatchDetails, (player) => {
    const ign = parseIgn(player);
    players[ign] = toSmiteQLMatch(player, patchVersion);
  });

  return players;
};

/**
 * Takes in matchDetails and returns the parties and list of players in each party
 * @param {Array<Object>} matchDetails - list of details for each player
 * @returns {Object} - map of parties
 */
export const processPartyDetails = (matchDetails) => {
  // player_1 is in a party of 3 [player_1, player_2, player_3] with solo queue players [player_4] and [player_5]
  // player_6 is in a part of 5 [player_6, player_7, player_8, player_9, player_10]
  //
  // player_1: {
  //   allies: [[player_1, player_2, player_3], [player_4], [player_5]],
  //   enemies: [player_6, player_7, player_8, player_9, player_10]
  // }

  const parties = {
    byGroup: {
      winners: {},
      losers: {},
    },
    byPlayer: {},
  };

  _.forEach(matchDetails, (player, index) => {
    const ign = parseIgn(player, index);
    const partyId = player[PARTY_ID];
    const group = player['Win_Status'] === 'Winner' ? 'winners' : 'losers';

    // setup empty objects
    parties['byGroup'][group][partyId] = {};
    parties['byPlayer'][ign] = {};
  });

  _.forEach(matchDetails, (player, index) => {
    const ign = parseIgn(player, index);
    const partyId = player[PARTY_ID];
    const god = player['Reference_Name'];
    const group = player['Win_Status'] === 'Winner' ? 'winners' : 'losers';

    // apply players to their respective party
    parties['byGroup'][group][partyId][ign] = {
      ign,
      partyId,
      god,
      platform: PORTALS[player.playerPortalId],
    };
    parties['byPlayer'][ign] = parties['byGroup'][group][partyId];
  });

  return {
    parties: {
      winners: _.values(_.map(parties['byGroup']['winners'], (winners) => _.values(winners))),
      losers: _.values(_.map(parties['byGroup']['losers'], (losers) => _.values(losers))),
      players: parties['byPlayer'],
    },
  };
};

/**
 *
 * @param {Array<Object>} matchDetails - matchDetails
 * @returns {Object} - account levels and god levels
 */
export const processLevelDetails = (matchDetails) => {
  const masteryLevels = {
    // Mastery_Level
    // player_1: 110
  };
  const accountLevels = {
    // Account_Level
    // player_1: 160
  };

  _.forEach(matchDetails, (player, index) => {
    const ign = parseIgn(player, index);
    masteryLevels[ign] = player['Mastery_Level'];
    accountLevels[ign] = player['Account_Level'];
  });

  return {
    masteryLevels,
    accountLevels,
  };
};

/**
 *
 * @param {Object} playerInfo - Player info with { history, matches } from Redis DB
 * @param {Object} options -
 * @param {Number} options.limit - number of matches to return from most recent to limit
 * @param {Number} options.index - grouping based on every 20 matches, 0 for first 20, 1 for 21-40, etc...
 * @returns {Object} - recentMatchHistory based on limit or index
 */
export const processRecentMatchHistory = (playerInfo, options) => {
  const { limit, index } = options;
  const recentHistory = {
    [MATCHES]: {},
    [HISTORY]: [],
    [RANKED]: {
      [WINS]: [],
      [LOSSES]: [],
    },
    [NORMAL]: {
      [WINS]: [],
      [LOSSES]: [],
    },
    [OVERALL]: {
      [WINS]: [],
      [LOSSES]: [],
    },
  };
  const INDEX_MODIFIER = 20;
  let start = null;
  let end = null;

  if (limit) {
    // get number of matches starting from most recent
    // upto the limit number. ie limit is 20, get 20 most recent matches
    start = 0;
    end = limit;
  }

  if (index !== undefined) {
    // get number of matches starting from match at start
    // to 20 more than the start
    start = index * INDEX_MODIFIER;
    end = start + 20;
  }

  if (!limit && index === undefined) {
    start = 0;
    end = 20;
  }

  for (let matchIndex = start; matchIndex < end; matchIndex++) {
    const matchId = playerInfo[HISTORY][matchIndex];
    const matchInfo = playerInfo[MATCHES][matchId];

    if (_.isEmpty(matchInfo)) {
      // if matchId doesnt exist, we have gone past the number of matches
      // in our history. we can end early
      break;
    }

    const victoryStatus = matchInfo.isVictory ? WINS : LOSSES;
    const matchType = matchInfo.isRanked ? RANKED : NORMAL;

    // fill in RANKED/NORMAL and OVERALL objects with win losses
    recentHistory[MATCHES][matchId] = matchInfo;
    recentHistory[HISTORY].push(matchId);
    recentHistory[matchType][victoryStatus].push(matchId);
    recentHistory[OVERALL][victoryStatus].push(matchId);
  }

  return recentHistory;
};
