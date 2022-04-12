import _ from 'lodash';

/**
 * rips out clan tags from a players name
 * @param {String} playerName - like dhko or [USA]dhko where [USA] is the clan tag
 * @returns {String} name
 */
export const parsePlayerName = (playerName) => {
  const name = _.replace(playerName, /(\[.+\])/g, '');
  return name;
};
