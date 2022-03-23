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

/**
 * rips out the response format from a method
 * @param {String} method - like 'createsessionJson'
 * @returns {String} - method like 'createsession'
 */
export const parseMethod = (method) => {
  const parsedMethod = _.replace(method, 'Json', '');
  return parsedMethod;
};
