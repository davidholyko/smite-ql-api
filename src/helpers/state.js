import _ from 'lodash';

import CONSTANTS from '../constants';

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

const {
  //
  HZ_PLAYER_NAME,
  ID,
} = SMITE_API_KEYS;

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
      [PATCH_VERSIONS]: {
        [CURRENT_PATCH]: null, // like '9.3'
        [PREVIOUS_PATCHES]: [], // like ['9.3', '9.2']
      },
      [GODS]: {
        //
      },
    },
  };

  return initialState;
};

export const buildPlayerState = (playerDetails) => {
  const initialPlayerState = {
    [IGN]: _.get(playerDetails, `[0][${HZ_PLAYER_NAME}]`), // in game name, like 'dhko'
    [ACCOUNT_NUMBER]: _.get(playerDetails, `[0][${ID}]`), // associated number, like 4553282
    [DETAILS]: _.first(playerDetails),
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
