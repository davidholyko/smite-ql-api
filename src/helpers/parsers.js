import _ from 'lodash';

import CONSTANTS from '../constants';

const { SMITE_API_KEYS, PORTALS } = CONSTANTS;
const { REFERENCE_NAME, PLAYER_NAME } = SMITE_API_KEYS;

/**
 * Replaces all spaces with '_'
 * @param {String} string - like 'Ranked Conquest' or '*Asi'
 * @param {Object} options -  options
 * @param {Boolean} options.isLowerCase - boolean to make ASI -> asi
 * @param {Boolean} options.encase - boolean to ecnase Asi -> __Asi__
 * @returns {String} string like 'ranked_conquest' or 'Asi'
 */
export const normalize = (string, { isLowerCase = true, encase = false } = {}) => {
  string = string.replaceAll(' ', '_');
  string = string.replaceAll('*', '');
  string = string.replaceAll(':', '');

  if (isLowerCase) {
    string = string.toLowerCase();
  }

  if (encase) {
    string = `__${string}__`;
  }

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

  if (index === undefined) {
    throw new Error('Index is required for parseIgn.');
  }

  const hiddenIGN = `_${normalize(player[REFERENCE_NAME], { isLowerCase: false })}_${index}`;
  const name = parsePlayerName(player[PLAYER_NAME]);
  const ign = !_.isEmpty(name) ? normalize(name, { isLowerCase: true, encase: true }) : hiddenIGN;
  const rawIgn = !_.isEmpty(name) ? name : hiddenIGN;

  return { ign, rawIgn };
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
 * @param {String} mapValue - raw value of map like 'Joust Queued (3v3)'
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

/**
 *
 * @param {String} platform - like 'HIREZ'
 * @returns {Number} portalId
 */
export const parsePortalId = (platform) => {
  if (!platform) {
    return undefined;
  }

  if (_.isNumber(platform)) {
    return platform;
  }

  return PORTALS[platform];
};

/**
 *
 * @param {Object} object - like { a: null, b: '2', c: 3 }
 * @returns {Object} object without falsy values - like { b: '2', c: 3}
 */
export const parseTruthyObject = (object) => {
  return _.pickBy(object, _.identity);
};
