/**
 * @file
 * processors are meant to take raw data from Smite Official API
 * and convert it to something that has more meaning for SmiteQL
 */

import _ from 'lodash';

import CONSTANTS from '../constants';

import { parsePlayerName } from './parsers';
import { toSmiteQLMatch } from './transformers';

const { SMITE_RAW_KEYS } = CONSTANTS;
const { HZ_PLAYER_NAME, REFERENCE_NAME, MATCH, PLAYER_ID, PARTY_ID, PLAYER_NAME } = SMITE_RAW_KEYS;

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
 * @param {String} playerId - playerId we are looking, like 'dhko'
 * @param {String} patchVersion - patchVersion at the time
 * @returns {Object} newMatchInfo
 */
export const processSmiteQLMatch = (rawMatchDetails, playerId, patchVersion) => {
  const match = _.find(rawMatchDetails, [HZ_PLAYER_NAME, playerId]);
  const smiteQLMatch = toSmiteQLMatch(match, patchVersion);

  return smiteQLMatch;
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
    parties[player[PARTY_ID]] = {};
  });

  _.forEach(matchDetails, (player, index) => {
    const hiddenPlayerName = `_${player[REFERENCE_NAME]}_${index}`;
    let name = parsePlayerName(player[PLAYER_NAME]);

    // account for when player profiles are hidden
    //   player.playerId = 0
    //   player.playerName = ''
    if (_.isEmpty(name)) {
      name = hiddenPlayerName;
      player[PLAYER_ID] = hiddenPlayerName;
    }

    parties[player[PARTY_ID]][name] = player[PLAYER_ID];
    playerIds[player[PLAYER_ID]] = player[PARTY_ID];
    playerNames[name] = player[PARTY_ID];
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
