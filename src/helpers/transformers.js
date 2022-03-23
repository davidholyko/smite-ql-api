import _ from 'lodash';

import { parsePlayerName } from './parsers';

/**
 *
 * @param {Array<Object>} matchDetails - list of details for each player
 * @returns {Object} - list of teams, playerIds, and playerNames
 */
export const transformMatchDetails = (matchDetails) => {
  const teams = {};
  const playerIds = {};
  const playerNames = {};

  _.forEach(matchDetails, (player) => {
    teams[player.PartyId] = {};
  });

  _.forEach(matchDetails, (player, index) => {
    const name = parsePlayerName(player.playerName);
    teams[player.PartyId][name] = player.playerId;

    // account for when player profiles are hidden
    if (_.isEmpty(name)) {
      playerIds[index] = player.PartyId;
      playerNames[player.Reference_Name + index] = player.PartyId;
    } else {
      playerIds[player.playerId] = player.PartyId;
      playerNames[name] = player.PartyId;
    }
  });

  // sift teams that are of size 1 (who are solo queued)
  _.forEach(_.keys(teams), (team) => {
    if (_.size(teams[team]) <= 1) {
      delete teams[team];
    }
  });

  return {
    teams,
    playerIds,
    playerNames,
  };
};
