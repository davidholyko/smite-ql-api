/**
 * @file
 * processors are meant to take raw data from Smite Official API
 * and convert it to something that has more meaning for SmiteQL
 */

import _ from 'lodash';

import CONSTANTS from '../constants';

import { parsePlayerName } from './parsers';
import { toSmiteQLMatch } from './transformers';

const { SMITE_API_KEYS } = CONSTANTS;
const { HZ_PLAYER_NAME, REFERENCE_NAME, MATCH, PLAYER_ID, PARTY_ID, PLAYER_NAME } = SMITE_API_KEYS;

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
    // account for when player profiles are hidden
    //   player.playerId = 0
    //   player.playerName = ''
    const hiddenIGN = `_${player[REFERENCE_NAME]}_${index}`;
    const name = parsePlayerName(player[PLAYER_NAME]);
    const ign = !_.isEmpty(name) ? name : hiddenIGN;
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
