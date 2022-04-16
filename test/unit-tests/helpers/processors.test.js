import * as processors from '../../../src/helpers/processors';
import MOCKS from '../../../src/mocks';

const {
  // processors
  processMatchHistory,
  processPartyDetails,
} = processors;

const { mockMatchDetails, mockSingleMatchHistory } = MOCKS;

describe('processors', () => {
  describe('processMatchHistory', () => {
    it('should return hasDiff false and fill in matches and history if current data is not upto date', () => {
      const mockPrevMatchInfo = { matches: {}, history: [] };
      const processedMatchHistory = processMatchHistory(mockPrevMatchInfo, mockSingleMatchHistory);

      const expectedMatchHistory = {
        hasDiff: false,
        history: [1232099678],
        matches: {
          1232099678: {
            date: '20220322000635',
            isVictory: false,
            matchId: 1232099678,
            god: 'Raijin',
          },
        },
      };

      expect(processedMatchHistory).toEqual(expectedMatchHistory);
    });

    it('should return hasDiff true with empty objects and arrays if current data is already up to date', () => {
      const mockPrevMatchInfo = {
        history: [1232099678],
        matches: {
          1232099678: {
            date: '20220322000635',
            isVictory: false,
            matchId: 1232099678,
            god: 'Raijin',
          },
        },
      };
      const processedMatchHistory = processMatchHistory(mockPrevMatchInfo, mockSingleMatchHistory);

      const expectedMatchHistory = {
        hasDiff: true,
        history: [],
        matches: {},
      };

      expect(processedMatchHistory).toEqual(expectedMatchHistory);
    });
  });

  describe('processPartyDetails', () => {
    it('should process a match and output an object to describe parties', () => {
      const processedPartyDetails = processPartyDetails(mockMatchDetails);

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

      expect(processedPartyDetails).toEqual(expectedPartyDetails);
    });
  });
});
