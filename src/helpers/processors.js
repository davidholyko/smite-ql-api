import _ from 'lodash';

import { transformMatchState } from './transformers';

/**
 *
 * @param {Object} oldMatchLog - object with matches and history
 * @param {Object} newMatchLog - object with matches and history. History is in order of most recent games at beginning
 * @returns {Object} compiledMatchLog
 */
export const processMatchHistory = (oldMatchLog, newMatchLog) => {
  const compiledMatchLog = _.cloneDeep(oldMatchLog);
  let hasDiff = false;

  for (const match in newMatchLog) {
    if (!oldMatchLog.matches[match.Match]) {
      hasDiff = true;
      compiledMatchLog.history.unshift(match);
      compiledMatchLog.matches[match.Match] = transformMatchState(match);
    } else {
      // if a match already exists, the rest of the matches in the newMatchLog already exist
      break;
    }
  }

  // TODO: currently this outputs big objects and arrays
  // to update redis with. Maybe its more performant to
  // call redis set and array append multiple times
  // than pass through big objects to overwrite
  return {
    ...compiledMatchLog,
    hasDiff,
  };
};
