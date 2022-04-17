/**
 * @file
 * transformers are meant to change the shape of an object without doing
 * heavy business logic
 */

import _ from 'lodash';
import moment from 'moment';

import CONSTANTS from '../constants';

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
 * @param {Object} rawMatchDetails - matchDetails
 * @param {String} patchVersion - patchVersion at the time of the match
 * @returns {Object} match with only date and victory status
 */
export const transformMatchState = (rawMatchDetails, patchVersion) => {
  const matchState = {
    date: transformMatchDate(rawMatchDetails.Entry_Datetime),
    isVictory: _.startsWith(rawMatchDetails.Win_Status, 'Win'),
    // match.name does not exist for casual matches
    isRanked: _.startsWith(rawMatchDetails.name, 'Ranked'),
    map: rawMatchDetails.Map_Game,
    matchId: rawMatchDetails.Match,
    duration: rawMatchDetails.Match_Duration,
    god: rawMatchDetails.Reference_Name,
    // required to map the items to a match
    // as items change over time
    // ! There is a potential bug that if a player's data has not been updated
    // ! and a new patch has been released, previous matches can be associated
    // ! with the new patch and those item descriptions will be incorrect
    patchVersion: patchVersion,
  };

  return matchState;
};
