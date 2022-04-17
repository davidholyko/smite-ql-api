/**
 * @file
 * processors are meant to take raw data from Smite Official API
 * and convert it to something that has more meaning for SmiteQL
 */

import _ from 'lodash';

import { parsePlayerName } from './parsers';
import { transformMatchState } from './transformers';

/**
 * Compares match history of new match history with old. If there are new matches, loads that
 * into an object to update redis DB with.
 * @param {Object} prevMatchInfo - object with ign, matches, history, and info
 * @param {Object} latestMatchHistory - object with matches and history. History is in order of most recent games at beginning
 * @returns {Array<String>} prevMatchInfo
 */
export const processMatchHistory = (prevMatchInfo, latestMatchHistory) => {
  const firstMatchId = _.first(latestMatchHistory).Match;
  const hasDiff = _.get(prevMatchInfo.matches, firstMatchId);
  const newMatches = [];

  if (hasDiff) {
    // if the first match in the latestMatchHistory already exists
    // in the previous match info, the rest of the matches
    // will also exist.
    return [];
  }

  for (const match of latestMatchHistory) {
    if (_.get(prevMatchInfo.matches, match.Match)) {
      // if we find a match in latestMatchHistory that already exists,
      // the rest of the matches in latestMatchHistory have already been added to redis DB
      // we do not need to keep adding matches

      break;
    }

    newMatches.push(match.Match);
  }

  return newMatches;
};

/**
 *
 * @param {Array<Object>} rawMatchDetails - raw matchDetails from Smite API
 * @param {String} accountName - accountName we are looking for
 * @param {String} patchVersion - patchVersion at the time
 * @returns {Object} newMatchInfo
 */
export const processMatchDetails = (rawMatchDetails, accountName, patchVersion) => {
  const match = _.find(rawMatchDetails, ['hz_player_name', accountName]);
  const newMatchState = transformMatchState(match, patchVersion);

  return newMatchState;
};

/**
 * Takes in matchDetails and returns the parties and list of players in each party
 * @param {Array<Object>} matchDetails - list of details for each player
 * @returns {Object} - map of parties, playerIds, and playerNames
 */
export const processPartyDetails = (matchDetails) => {
  // map of parties
  const parties = {};
  // map of playerIds to parties
  const playerIds = {};
  // map of playerNames to parties
  const playerNames = {};

  _.forEach(matchDetails, (player) => {
    parties[player.PartyId] = {};
  });

  _.forEach(matchDetails, (player, index) => {
    const hiddenPlayerName = `_${player.Reference_Name}_${index}`;
    let name = parsePlayerName(player.playerName);

    // account for when player profiles are hidden
    //   player.playerId = 0
    //   player.playerName = ''
    if (_.isEmpty(name)) {
      name = hiddenPlayerName;
      player.playerId = hiddenPlayerName;
    }

    parties[player.PartyId][name] = player.playerId;
    playerIds[player.playerId] = player.PartyId;
    playerNames[name] = player.PartyId;
  });

  // sift parties that are of size 1 (who are solo queued)
  _.forEach(_.keys(parties), (team) => {
    if (_.size(parties[team]) <= 1) {
      delete parties[team];
    }
  });

  return {
    parties,
    playerIds,
    playerNames,
  };
};
