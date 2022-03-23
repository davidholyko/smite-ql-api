import _ from 'lodash';

import { parsePlayerName } from './parsers';

/**
 *
 * @param {Array<Object>} matchDetails - list of details for each player
 * @returns {Object} - list of teams, playerIds, and playerNames
 */
export const transformMatchDetails = (matchDetails) => {
  // map of teams
  const teams = {};
  // map of playerIds to teams
  const playerIds = {};
  // map of playerNames to teams
  const playerNames = {};

  _.forEach(matchDetails, (player) => {
    teams[player.PartyId] = {};
  });

  _.forEach(matchDetails, (player, index) => {
    const hiddenPlayerName = player.Reference_Name + index;
    let name = parsePlayerName(player.playerName);

    // account for when player profiles are hidden
    //   player.playerId = 0
    //   player.playerName = ''
    if (_.isEmpty(name)) {
      name = hiddenPlayerName;
      player.playerId = hiddenPlayerName;
    }

    teams[player.PartyId][name] = player.playerId;
    playerIds[player.playerId] = player.PartyId;
    playerNames[name] = player.PartyId;
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
