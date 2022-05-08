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
      const match = _.first(mockMatchDetails);
      const transformedMatchState = toSmiteQLMatch(match, '10.0');

      const expectedMatch = {
        accountLevel: 144,
        assists: 9,
        damageDone: 31059,
        damageMitigated: 6095,
        damageStructures: 1790,
        damageTaken: 16629,
        date: '20220310043610',
        deaths: 5,
        durationInMinutes: 19,
        durationInSeconds: 1189,
        god: 'Nu Wa',
        godActives: ['Purification Beads', 'Aegis Amulet'],
        godItems: [
          'Conduit Gem',
          "Evolved Charon's Coin",
          "Chronos' Pendant",
          'Divine Ruin',
          'Spear of Desolation',
          'Calamitous Rod of Tahuti',
        ],
        godLevel: 20,
        gold: 15941,
        healing: 0,
        isRanked: false,
        isWatchable: false,
        isVictory: true,
        kills: 11,
        map: 'Slash',
        mapValue: 'Slash',
        masteryLevel: 111,
        matchId: 1229914631,
        platform: 'XBOX',
        patchVersion: '10.0',
        role: 'Unknown',
        wards: 2,
      };

      expect(transformedMatchState).toEqual(expectedMatch);
    });
  });
});
