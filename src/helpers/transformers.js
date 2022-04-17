/**
 * @file
 * transformers are meant to change the shape of an object without doing
 * heavy business logic
 */

import _ from 'lodash';
import moment from 'moment';

import CONSTANTS from '../constants';

const { API, SMITE_RAW_KEYS } = CONSTANTS;
const { TIME_FORMAT } = API;

const {
  //
  ENTRY_DATETIME,
  WIN_STATUS,
  NAME,
  MAP_GAME,
  MATCH,
  MATCH_DURATION,
  REFERENCE_NAME,
} = SMITE_RAW_KEYS;

/**
 *
 * @param {String} date - like '3/22/2022 12:06:35 AM'
 * @returns {String} - formatted date as string of numbers
 */
export const toDate = (date) => {
  const isoDateFormat = new Date(date);
  const newDate = moment(isoDateFormat).format(TIME_FORMAT);
  return newDate;
};

/**
 *
 * @param {Object} rawMatchDetails - matchDetails
 * @param {String} patchVersion - patchVersion at the time of the match
 * @returns {Object} match with only date and victory status
 */
export const toSmiteQLMatch = (rawMatchDetails, patchVersion) => {
  const matchState = {
    // this date refers to a match's UTC time
    date: toDate(rawMatchDetails[ENTRY_DATETIME]),

    isVictory: _.startsWith(rawMatchDetails[WIN_STATUS], 'Win'),
    isRanked: _.startsWith(rawMatchDetails[NAME], 'Ranked'),

    map: rawMatchDetails[MAP_GAME],
    matchId: rawMatchDetails[MATCH],
    duration: rawMatchDetails[MATCH_DURATION],
    god: rawMatchDetails[REFERENCE_NAME],

    // ! There is a potential bug that if a player's data has not been updated
    // ! and a new patch has been released, previous matches can be associated
    // ! with the new patch and those item descriptions will be incorrect
    patchVersion: patchVersion,
  };

  return matchState;
};
