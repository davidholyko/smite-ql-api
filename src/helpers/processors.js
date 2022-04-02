import _ from 'lodash';

import { transformMatchState } from './transformers';

/**
 *
 * @param {Object} oldMatchLog - object with matches and history
 * @param {Object} newMatchLog - object with matches and history
 * @returns {Object} compiledMatchLog
 */
export const processMatchHistory = (oldMatchLog, newMatchLog) => {
  const compiledMatchLog = _.cloneDeep(oldMatchLog);

  _.forEach(newMatchLog, (match) => {
    if (!oldMatchLog.matches[match.Match]) {
      compiledMatchLog.history.push(match);
      compiledMatchLog.matches[match.Match] = transformMatchState(match);
    }
  });

  // TODO: currently this outputs big objects and arrays
  // to update redis with. Maybe its more performant to
  // call redis set and array append multiple times
  // than pass through big objects to overwrite
  return compiledMatchLog;
};
