import _ from 'lodash';

import * as tranformers from '../../src/helpers/transformers';
import MOCKS from '../../src/sandbox/mocks';

const {
  //
  transformMatchDate,
  transformMatchState,
  transformMatchDetails,
  transformMatchHistory,
} = tranformers;

const { mockMatchDetails, mockMatchHistory } = MOCKS;

describe('Transformers', () => {
  describe('transformMatchDate', () => {
    it('should convert date to utc format', () => {
      const date = '3/22/2022 12:06:35 AM';
      const transformedDate = transformMatchDate(date);

      expect(transformedDate).toEqual('20220322000635');
    });
  });

  describe('transformMatchState', () => {
    it('should covert match object from Smite Offical API to condensed version', () => {
      const match = {
        ..._.first(mockMatchDetails),
        Match_Time: '3/22/2022 12:06:35 AM',
        Win_Status: 'Loss',
      };
      const expectedMatch = {
        date: '20220322000635',
        isVictory: false,
      };
      const transformedMatchState = transformMatchState(match);

      expect(transformedMatchState).toEqual(expectedMatch);
    });
  });

  describe('transformMatchDetails', () => {
    it('should convert take a match and transform the object to describe parties', () => {
      const expectedMatchDetails = {
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
        teams: {
          735488: {
            Kira474: '500755287',
            MexicanMagikarp: '504439576',
            Shinra_Tensei97: '500597761',
          },
        },
      };
      const transformedMatchDetails = transformMatchDetails(mockMatchDetails);

      expect(transformedMatchDetails).toEqual(expectedMatchDetails);
    });
  });

  describe('transformMatchHistory', () => {
    it('should covert matchHistory into object containing history and matches', () => {
      const match = _.first(mockMatchHistory);
      const transformedMatchHistory = transformMatchHistory(mockMatchHistory);

      const expectation = expect.objectContaining({
        matches: expect.objectContaining({ [match.Match]: expect.anything() }),
        history: expect.arrayContaining([match]),
      });

      expect(transformedMatchHistory).toEqual(expectation);
    });
  });
});
