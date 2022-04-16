/**
 * @file
 * transformers are meant to change the shape of an object without doing
 * heavy business logic
 */

import moment from 'moment';

import CONSTANTS from '../constants';
import GLOBALS from '../globals';

const { API } = CONSTANTS;
const { TIME_FORMAT } = API;

/**
 *
 * @param {String} date - like '3/22/2022 12:06:35 AM'
 * @returns {String} - formatted date as string of numbers
 */
export const transformMatchDate = (date) => {
  const isoDateFormat = new Date(date);
  const newDate = moment(isoDateFormat).format(TIME_FORMAT);
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
    matchId: match.Match,
    god: match.God,
    // required to map the items to a match
    // as items change over time
    patchVersion: GLOBALS.patch_version,
  };

  return matchState;
};
