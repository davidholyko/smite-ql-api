import _ from 'lodash';

import CONSTANTS from '../constants';

const { SMITE_API_KEYS } = CONSTANTS;
const { REFERENCE_NAME, PLAYER_NAME } = SMITE_API_KEYS;

/**
 * Replaces all spaces with '_'
 * @param {String} string - like 'Ranked Conquest' or '*Asi'
 * @param {Boolean} isLowerCase -
 * @returns {String} string like 'ranked_conquest' or 'Asi'
 */
export const normalize = (string, isLowerCase = true) => {
  string = string.replaceAll(' ', '_');
  string = string.replaceAll('*', '');
  isLowerCase && (string = string.toLowerCase());
  return string;
};

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
  const hiddenIGN = `_${normalize(player[REFERENCE_NAME], false)}_${index}`;
  const name = parsePlayerName(player[PLAYER_NAME]);
  const ign = !_.isEmpty(name) ? name : hiddenIGN;
  return ign;
};

/**
 *
 * @param {String} version - like 9.4
 * @returns {String} version like 9_4
 */
export const parsePatchVersion = (version) => {
  if (!version) {
    return undefined;
  }

  return version.replace('.', '_');
};

/**
 *
 * @param {String} mapValue - raw value of map like 'Joust Queued (3v3)
 * @returns {String} map
 */
export const parseMapValue = (mapValue) => {
  let map = null;

  switch (true) {
    case mapValue.includes('Ranked') && mapValue.includes('1v1'):
      map = 'Ranked Duel';
      break;
    case mapValue.includes('Ranked') && mapValue.includes('Conquest'):
      map = 'Ranked Conquest';
      break;
    case mapValue.includes('Ranked') && mapValue.includes('Joust'):
      map = 'Ranked Joust';
      break;
    case mapValue.includes('Conquest'):
      map = 'Conquest';
      break;
    case mapValue.includes('Arena'):
      map = 'Arena';
      break;
    case mapValue.includes('Joust'):
      map = 'Joust';
      break;
    case mapValue.includes('Assault'):
      map = 'Assault';
      break;
    case mapValue.includes('Slash'):
      map = 'Slash';
      break;
    case mapValue.includes('Siege'):
      map = 'Siege';
      break;
    default:
      break;
  }

  return map;
};
