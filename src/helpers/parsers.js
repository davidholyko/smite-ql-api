import _ from 'lodash';

import CONSTANTS from '../constants';

const { SMITE_API_KEYS } = CONSTANTS;
const { REFERENCE_NAME, PLAYER_NAME } = SMITE_API_KEYS;

/**
 * rips out clan tags from a players name
 * @param {String} playerName - like dhko or [USA]dhko where [USA] is the clan tag
 * @returns {String} name
 */
export const parsePlayerName = (playerName) => {
  const name = _.replace(playerName, /(\[.+\])/g, '');
  return name;
};

/**
 * returns an in game name identifier for a player
 * @param {Object} player - player from match details
 * @param {Number} index - arbitrary index to prevent name clashing
 * @returns {String} player's ign or composed name for a hidden profile, like _Thor_1
 */
export const parseIgn = (player, index) => {
  // account for when player profiles are hidden
  //   player.playerId = 0
  //   player.playerName = ''
  const hiddenIGN = `_${player[REFERENCE_NAME]}_${index}`;
  const name = parsePlayerName(player[PLAYER_NAME]);
  const ign = !_.isEmpty(name) ? name : hiddenIGN;
  return ign;
};
