import _ from 'lodash';

import * as tranformers from '../../../src/helpers/transformers';
import MOCKS from '../../../src/mocks';

const {
  // transformers
  transformMatchDate,
  transformMatchState,
} = tranformers;

const { mockMatchDetails } = MOCKS;

describe('Transformers', () => {
  describe('transformMatchDate', () => {
    it('should convert date to utc format', () => {
      const date = '3/22/2022 12:06:35 AM';
      const transformedDate = transformMatchDate(date);
      const expectedDate = '20220322000635';

      expect(transformedDate).toEqual(expectedDate);
    });
  });

  describe('transformMatchState', () => {
    it('should covert match object from Offical Smite API to condensed version', () => {
      const match = {
        ..._.first(mockMatchDetails),
        Match_Time: '3/22/2022 12:06:35 AM',
        Win_Status: 'Loss',
      };

      const transformedMatchState = transformMatchState(match);

      const expectedMatch = {
        date: '20220322000635',
        isVictory: false,
        matchId: 1229914631,
      };

      expect(transformedMatchState).toEqual(expectedMatch);
    });
  });
});
