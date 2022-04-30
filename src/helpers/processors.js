/**
 * @file
 * processors are meant to take raw data from Smite Official API
 * and convert it to something that has more meaning for SmiteQL
 */

import _ from 'lodash';

import CONSTANTS from '../constants';

import { parseIgn } from './parsers';
import { toSmiteQLMatch } from './transformers';

const { SMITE_API_KEYS } = CONSTANTS;
const { MATCH, PLAYER_ID, PARTY_ID } = SMITE_API_KEYS;

/**
 * Compares match history of new match history with old. If there are new matches, loads that
 * into an object to update redis DB with.
 * @param {Object} prevMatchInfo - object with matches, history
 * @param {Object} latestMatchHistory - object with matches and history. History is in order of most recent games at beginning
 * @returns {Array<String>} prevMatchInfo
 */
export const processMatchHistory = (prevMatchInfo, latestMatchHistory) => {
  const firstMatchId = _.get(latestMatchHistory, `[0][${MATCH}]`);
  const hasDiff = _.get(prevMatchInfo.matches, firstMatchId);
  const newMatches = [];

  if (hasDiff) {
    // if the first match in the latestMatchHistory already exists
    // in the previous match info, the rest of the matches
    // will also exist.
    return [];
  }

  for (const match of latestMatchHistory) {
    if (_.get(prevMatchInfo.matches, match[MATCH])) {
      // if we find a match in latestMatchHistory that already exists,
      // the rest of the matches in latestMatchHistory have already been
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
  // map of parties to partyIds
  // example:
  // {
  //   <partyId>   <ign>     <playerId>
  //   1234:     { player_1: '0123',    player_2: '0234'}
  //   5678:     { player_3: '0567',    player_4: '0678'}
  // }
  const partiesByPartyIds = {};
  // map of parties to playerIds
  // example:
  // {
  //   <ign>       <ign>     <playerId>
  //   player_1: { player_1: '0123',    player_2: '0234'}
  //   player_2: { player_1: '0123',    player_2: '0234'}
  //   player_3: { player_3: '0567',    player_3: '0678'}
  //   player_4: { player_3: '0567',    player_4: '0678'}
  // }
  const partiesByPlayerIds = {};

  // create partiesByPartyIds
  _.forEach(matchDetails, (player, index) => {
    const ign = parseIgn(player, index);
    const partyId = player[PARTY_ID];

    // setup empty objects
    partiesByPartyIds[partyId] = partiesByPartyIds[partyId] || {};
    partiesByPlayerIds[ign] = partiesByPlayerIds[ign] || {};

    // apply players to their respective party
    partiesByPartyIds[partyId][ign] = player[PLAYER_ID];
    partiesByPlayerIds[ign] = partiesByPartyIds[partyId];
  });

  // sift parties that are of size 1 (who are solo queued)
  _.forEach(_.keys(partiesByPartyIds), (team) => {
    if (_.size(partiesByPartyIds[team]) <= 1) {
      delete partiesByPartyIds[team];
    }
  });

  // sift parties that are of size 1 (who are solo queued)
  _.forEach(_.keys(partiesByPlayerIds), (ign) => {
    if (_.size(partiesByPlayerIds[ign]) <= 1) {
      delete partiesByPlayerIds[ign];
    }
  });

  return {
    partiesByPartyIds,
    partiesByPlayerIds,
  };
};

/**
 *
 * @param {Array<Object>} matchDetails - array of objects for each player
 * @returns {Object} object - enemies and allies
 */
export const processTeamDetails = (matchDetails) => {
  const teams = {
    winners: {
      // player_1: true
      // player_2: true
      // player_3: true
    },
    losers: {
      // player_4: true
      // player_5: true
      // player_6: true
    },
  };
  const players = {
    // player_1: { player_1, player_2, player_3}
    // player_2: { player_1, player_2, player_3}
    // player_3: { player_1, player_2, player_3}
    // player_4: { player_1, player_2, player_3}
    // player_5: { player_1, player_2, player_3}
    // player_6: { player_1, player_2, player_3}
  };

  _.forEach(matchDetails, (player, index) => {
    const ign = parseIgn(player, index);

    if (player.Win_Status === 'Winner') {
      teams.winners[ign] = player[PLAYER_ID];
    }

    if (player.Win_Status === 'Loser') {
      teams.losers[ign] = player[PLAYER_ID];
    }
  });

  _.forEach(matchDetails, (player, index) => {
    const ign = parseIgn(player, index);

    if (player.Win_Status === 'Winner') {
      players[ign] = teams.winners;
    }

    if (player.Win_Status === 'Loser') {
      players[ign] = teams.losers;
    }
  });

  return {
    teams,
    players,
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
  const recentHistory = { matches: {}, history: [] };
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
    const matchId = playerInfo.history[matchIndex];

    if (!matchId) {
      // if matchId doesnt exist, we have gone past the number of matches
      // in our history. we can end early
      break;
    }

    recentHistory.history.push(matchId);
    recentHistory.matches[matchId] = playerInfo.matches[matchId];
  }

  return recentHistory;
};
