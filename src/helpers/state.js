import _ from 'lodash';

import CONSTANTS from '../constants';

import { parsePlayerName } from './parsers';

const { SMITE_QL_KEYS, SMITE_API_KEYS } = CONSTANTS;
const {
  WINS,
  LOSSES,
  RANKED,
  NORMAL,
  PLAYERS,
  MATCHES,
  HISTORY,
  DETAILS,
  GLOBAL,
  PATCH_VERSIONS,
  MISC,
  ITEMS,
  IGN,
  CURRENT_PATCH,
  PREVIOUS_PATCHES,
  ACCOUNT_NUMBER,
  GODS,
} = SMITE_QL_KEYS;

const { ID } = SMITE_API_KEYS;

/**
 * Builds an object for initial state of redis DB
 * @returns {Object} redis state
 */
export const buildRootState = () => {
  const initialState = {
    [MISC]: {
      // schemaVersion refers to version for all JSON and Array shapes
      // The shapes for objects could change over time and when those updates
      // hit production, the old redis DB info has to be updated to the latest schema
      schema_version: '1.0.0',
    },

    [PLAYERS]: {
      // example:
      // key is a player's ign name
      // value is an object with
      //
      // dhko: {
      //   info: {}, // player info from 'getPlayer'
      //   matches: {}, // map of matchIds
      //   history: [], // list of match details for a player
      //   ranked: { wins: [], losses: [] }
      //   normal: { wins: [], losses: [] }
      // },
    },

    [GLOBAL]: {
      [MATCHES]: {
        // example:
        // key is a matchId
        // value is data from 'getMatchDetails'
        //
        // 1232511801: {
        //   raw: {}, // non-mutated data from Smite API
        //   partyDetails: {}, // party details for a match calculated by SmiteQL
        // }
        //
      },
      [ITEMS]: {
        // example:
        // key is a patch version
        //
        // '9.3': {
        //   'Asi': {}
        // }
      },
      // TODO: move to MISC object
      [PATCH_VERSIONS]: {
        [CURRENT_PATCH]: null, // like '9.3'
        [PREVIOUS_PATCHES]: [], // like ['9.3', '9.2']
      },
      [GODS]: {
        // example:
        // key is a patch version
        //
        // '9.3': {
        //   'Thor': {}
        // }
      },
    },
  };

  return initialState;
};

/**
 * builds initial state for a player
 * @param {Array<Object> | Object} playerDetails - an array with one item for player details
 * @returns {Object} playerState
 */
export const buildPlayerState = (playerDetails) => {
  const player = _.isArray(playerDetails) ? _.first(playerDetails) : playerDetails;

  const initialPlayerState = {
    [IGN]: parsePlayerName(player), // in game name, like 'dhko'
    [ACCOUNT_NUMBER]: player[ID], // associated number, like 4553282
    [DETAILS]: player,
    [MATCHES]: {},
    [HISTORY]: [],
    [NORMAL]: {
      [WINS]: [],
      [LOSSES]: [],
    },
    [RANKED]: {
      [WINS]: [],
      [LOSSES]: [],
    },
  };

  return initialPlayerState;
};

/**
 * builds initial state for a match for a specific player
 * @param {Object} params -
 * @param {Object} params.matchInfo -
 * @param {String} params.playerId -
 * @param {Object} params.partyDetails -
 * @param {Object} params.teamDetails -
 * @returns {Object} playerState
 */
export const buildPlayerMatchState = ({ matchInfo, playerId, partyDetails, teamDetails }) => {
  const { isVictory } = matchInfo;
  const enemies = isVictory ? teamDetails.teams.losers : teamDetails.teams.winners;
  const allies = isVictory ? teamDetails.teams.winners : teamDetails.teams.losers;
  const party = _.get(partyDetails, `partiesByPlayerIds.${playerId}`, {});

  const playerMatchState = {
    ...matchInfo,
    party,
    enemies,
    allies,
  };

  return playerMatchState;
};
