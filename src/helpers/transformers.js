/**
 * @file
 * transformers are meant to change the shape of an object without doing
 * heavy business logic
 */

import _ from 'lodash';
import moment from 'moment';

import CONSTANTS from '../constants';
import HELPERS from '../helpers';

const { MOMENT, PORTALS, SMITE_QL_KEYS } = CONSTANTS;
const { SMITE_API_FORMAT } = MOMENT;

/**
 *
 * @param {String} date - like '3/22/2022 12:06:35 AM'
 * @returns {String} - formatted date as string of numbers
 */
export const toDate = (date) => {
  const isoDateFormat = new Date(date);
  const newDate = moment(isoDateFormat).format(SMITE_API_FORMAT);
  return newDate;
};

/**
 *
 * @param {Object} rawMatchDetails - matchDetails for a player
 * @param {String} patchVersion - patchVersion at the time of the match
 * @param {Object} names - ign and rawIgn
 * @returns {Object} match with only date and victory status
 */
export const toSmiteQLMatch = (rawMatchDetails, patchVersion, names) => {
  const playerActives = [
    // actives
    rawMatchDetails.Item_Active_1,
    rawMatchDetails.Item_Active_2,
  ];
  const playerItems = [
    // items
    rawMatchDetails.Item_Purch_1,
    rawMatchDetails.Item_Purch_2,
    rawMatchDetails.Item_Purch_3,
    rawMatchDetails.Item_Purch_4,
    rawMatchDetails.Item_Purch_5,
    rawMatchDetails.Item_Purch_6,
  ];

  const mapValue = _.get(rawMatchDetails, 'Map_Game', 'Unknown');
  const map = HELPERS.parseMapValue(mapValue);

  const matchState = {
    // this date refers to a match's UTC time
    date: toDate(_.get(rawMatchDetails, 'Entry_Datetime')),

    // checks
    isCustom: _.startsWith(rawMatchDetails['name'], 'Custom'),
    isVictory: _.startsWith(rawMatchDetails['Win_Status'], 'Win'),
    isRanked: _.startsWith(rawMatchDetails['name'], 'Ranked'),
    isWatchable: _.startsWith(rawMatchDetails['hasReplay'], 'y'),

    // player name
    ign: names.ign,
    rawIgn: names.rawIgn,

    // player match details
    kills: _.get(rawMatchDetails, 'Kills_Single', 0),
    deaths: _.get(rawMatchDetails, 'Deaths', 0),
    assists: _.get(rawMatchDetails, 'Assists', 0),
    healing: _.get(rawMatchDetails, 'Healing', 0),
    gold: _.get(rawMatchDetails, 'Gold_Earned', 0),
    god: _.get(rawMatchDetails, 'Reference_Name', 0),
    role: _.get(rawMatchDetails, 'Role', 0),
    godLevel: _.get(rawMatchDetails, 'Final_Match_Level', 'Unknown'),
    wards: _.get(rawMatchDetails, 'Wards_Placed', 0),

    // damage
    damageDone: _.get(rawMatchDetails, 'Damage_Player', 0),
    damageTaken: _.get(rawMatchDetails, 'Damage_Taken', 0),
    damageMitigated: _.get(rawMatchDetails, 'Damage_Mitigated', 0),
    damageStructures: _.get(rawMatchDetails, 'Structure_Damage', 0),

    // items and actives
    godActives: _.filter(playerActives, _.identity),
    godItems: _.filter(playerItems, _.identity),

    // player detils
    accountLevel: _.get(rawMatchDetails, 'Account_Level', 0),
    masteryLevel: _.get(rawMatchDetails, 'Mastery_Level', 0),

    // match details
    mapValue,
    map,
    matchType: _.get(rawMatchDetails, 'name', 'Unknown'),
    matchId: _.get(rawMatchDetails, 'Match', 0),
    durationInSeconds: _.get(rawMatchDetails, 'Match_Duration', 0),
    durationInMinutes: _.get(rawMatchDetails, 'Minutes', 0),

    // platform
    platform: _.get(PORTALS, rawMatchDetails['playerPortalId']),

    // ! There is a potential bug that if a player's data has not been updated
    // ! and a new patch has been released, previous matches can be associated
    // ! with the new patch and those item descriptions will be incorrect
    patchVersion,
  };

  return matchState;
};

/**
 *
 * @param {String} playerId - like 'dhko'
 * @param {String} path - like '.matches'
 * @returns {String} newPath
 */
export const toPlayerPath = (playerId, path) => {
  const { PLAYERS } = SMITE_QL_KEYS;
  const playerName = HELPERS.normalize(playerId, { isLowerCase: true, encase: true });
  const extendedPath = path ? `${playerName}.${path}` : playerName;
  const newPath = `${PLAYERS}.${extendedPath}`;

  return newPath;
};
