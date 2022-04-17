import _ from 'lodash';

import * as PROCESSORS from '../../../src/helpers/processors';
import MOCKS from '../../../src/mocks';

const {
  // processors
  processMatchHistory,
  processSmiteQLMatch,
  processPartyDetails,
} = PROCESSORS;

const {
  // mocks
  mockMatchDetails,
  mockSingleMatchHistory,
  mockMultipleMatchHistory,
} = MOCKS;

describe('processors', () => {
  const patchVersion = '10.0';

  describe('processMatchHistory', () => {
    it('should return an array of new matches current data is not up to date', () => {
      const mockPrevMatchInfo = { matches: {}, history: [] };
      const matchHistory = processMatchHistory(mockPrevMatchInfo, mockSingleMatchHistory);
      const expectedMatchHistory = [1232099678];

      expect(matchHistory).toEqual(expectedMatchHistory);
    });
    it('should return [] if current data is already up to date', () => {
      const mockPrevMatchInfo = {
        history: [1232099678],
        matches: {
          1232099678: {},
        },
      };

      const matchHistory = processMatchHistory(mockPrevMatchInfo, mockSingleMatchHistory);
      const expectedMatchHistory = [];

      expect(matchHistory).toEqual(expectedMatchHistory);
    });
    it('should return partial array if there is a match in previous data', () => {
      const latestMatchHistory = _.slice(mockMultipleMatchHistory, 0, 10);
      const mockPrevMatchInfo = {
        history: [1231930477],
        matches: {
          // this is the 6th match out of 10
          1231930477: {},
        },
      };

      const matchHistory = processMatchHistory(mockPrevMatchInfo, latestMatchHistory);
      const matchIds = _.map(latestMatchHistory, (match) => match.Match);
      const expectedMatchHistory = _.slice(matchIds, 0, 6);

      expect(matchHistory).toEqual(expectedMatchHistory);
    });
  });

  describe('processSmiteQLMatch', () => {
    it('should process raw data into a SmiteQL match object', () => {
      const smiteQLMatch = processSmiteQLMatch(mockMatchDetails, 'dhko', patchVersion);
      const expectedSmiteQLMatch = {
        date: '20220310043610',
        duration: 1189,
        god: 'Vulcan',
        isRanked: false,
        isVictory: false,
        map: 'Slash',
        matchId: 1229914631,
        patchVersion,
      };

      expect(smiteQLMatch).toEqual(expectedSmiteQLMatch);
    });
  });

  describe('processPartyDetails', () => {
    it('should process a match and output an object to describe parties', () => {
      const partyDetails = processPartyDetails(mockMatchDetails);

      const expectedPartyDetails = {
        playerIds: {
          10846378: 743320,
          4553282: 732129,
          500597761: 735488,
          500755287: 735488,
          504439576: 735488,
          700467170: 753091,
          704820239: 753174,
          7749704: 612260,
          8286706: 742515,
          _Danzaburou_8: 672168,
        },
        playerNames: {
          DesertGardener: 612260,
          Kira474: 735488,
          MexicanMagikarp: 735488,
          Mowo089: 743320,
          NickiMinajVËVO: 742515,
          Shinra_Tensei97: 735488,
          _Danzaburou_8: 672168,
          dalvon21: 753091,
          declan129: 753174,
          dhko: 732129,
        },
        parties: {
          735488: {
            Kira474: '500755287',
            MexicanMagikarp: '504439576',
            Shinra_Tensei97: '500597761',
          },
        },
      };

      expect(partyDetails).toEqual(expectedPartyDetails);
    });
  });
});
