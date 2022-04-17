import _ from 'lodash';

import * as TRANSFORMERS from '../../../src/helpers/transformers';
import MOCKS from '../../../src/mocks';

const {
  // transformers
  toDate,
  toSmiteQLMatch,
} = TRANSFORMERS;

const { mockMatchDetails } = MOCKS;

describe('Transformers', () => {
  describe('toDate', () => {
    it('should convert date to utc format', () => {
      const date = '3/22/2022 12:06:35 AM';
      const transformedDate = toDate(date);
      const expectedDate = '20220322000635';

      expect(transformedDate).toEqual(expectedDate);
    });
  });

  describe('toSmiteQLMatch', () => {
    it('should covert match object from Offical Smite API to condensed version', () => {
      const match = {
        ..._.first(mockMatchDetails),
        Match_Time: '3/22/2022 12:06:35 AM',
        Win_Status: 'Loss',
      };

      const transformedMatchState = toSmiteQLMatch(match, '10.0');

      const expectedMatch = {
        date: '20220310043610',
        isVictory: false,
        isRanked: false,
        map: 'Slash',
        god: 'Nu Wa',
        duration: 1189,
        matchId: 1229914631,
        patchVersion: '10.0',
      };

      expect(transformedMatchState).toEqual(expectedMatch);
    });
  });
});
