import _ from 'lodash';

import { transformMatchState } from './transformers';

/**
 *
 * @param {Object} playerDetails - object with ign, matches, history, and info
 * @param {Object} matchHistory - object with matches and history. History is in order of most recent games at beginning
 * @returns {Object} compiledMatchLog
 */
export const processMatchHistory = (playerDetails, matchHistory) => {
  const compiledMatchLog = _.cloneDeep(playerDetails);
  let hasDiff = false;

  for (const match of matchHistory) {
    const { Match: matchId } = match;
    if (!_.get(playerDetails.matches, matchId)) {
      hasDiff = true;
      const transformedMatch = transformMatchState(match);
      compiledMatchLog.history.push(transformedMatch.matchId);
      compiledMatchLog.matches[matchId] = transformedMatch;
    } else {
      // if a match already exists,
      // the rest of the matches in the matchHistory already exist
      break;
    }
  }

  // TODO: currently this outputs big objects and arrays
  // to update redis with. Maybe its more performant to
  // call redis set and array append multiple times
  // than pass through big objects to overwrite
  return {
    history: compiledMatchLog.history,
    matches: compiledMatchLog.matches,
    hasDiff,
  };
};
