import _ from 'lodash';
import moment from 'moment';

import { parsePlayerName } from './parsers';

/**
 *
 * @param {String} date - like '3/22/2022 12:06:35 AM'
 * @returns {String} - formatted date as string of numbers
 */
export const transformMatchDate = (date) => {
  const newDate = moment(date).utc().format('yyyyMMDDHHmmss');
  return newDate;
};

/**
 *
 * @param {Object} match - match details
 * @returns {Object} match with only date and victory status
 */
export const transformMatchState = (match) => {
  const matchState = {
    date: transformMatchDate(match.Match_Time),
    isVictory: match.Win_Status === 'Win',
  };

  return matchState;
};

/**
 *
 * @param {Array<Object>} matchDetails - list of details for each player
 * @returns {Object} - map of teams, playerIds, and playerNames
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
    const hiddenPlayerName = `_${player.Reference_Name}_${index}`;
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

/**
 *
 * @param {Array<Object>} matchHistory - list of matches for each player
 * @returns {Object} - map of history and matches
 */
export const transformMatchHistory = (matchHistory) => {
  const history = [];
  const matches = {};

  _.forEach(matchHistory, (match) => {
    history.push(match);
    matches[match.Match] = transformMatchState(match);
  });

  return {
    history,
    matches,
  };
};
