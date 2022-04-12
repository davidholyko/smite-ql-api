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
 * @returns {Object} prevMatchInfo
 */
export const processMatchHistory = (prevMatchInfo, latestMatchHistory) => {
  const matchInfo = _.cloneDeep(prevMatchInfo);
  // if the first match in the latestMatchHistory already exists
  // in the previous match info, the rest of the matches
  // will also exist.
  const hasDiff = _.get(prevMatchInfo, `matches[${_.first(latestMatchHistory).Match}]`);

  if (hasDiff) {
    return {
      hasDiff: true,
      history: [],
      matches: {},
    };
  }

  for (const match of latestMatchHistory) {
    const { Match: matchId } = match;
    const transformedMatch = transformMatchState(match);
    matchInfo.history.push(transformedMatch.matchId);
    matchInfo.matches[matchId] = transformedMatch;
  }

  // TODO: currently this outputs big objects and arrays
  // to update redis with. Maybe its more performant to
  // call redis set and array append multiple times
  // than pass through big objects to overwrite
  return {
    hasDiff: false,
    history: matchInfo.history,
    matches: matchInfo.matches,
  };
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
