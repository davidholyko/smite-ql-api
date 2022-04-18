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
        accountLevel: 160,
        actives: [
          'Evolved Book of Thoth',
          'Spear of Desolation',
          'Spear of the Magus',
          'Calamitous Rod of Tahuti',
          'Enchanted Spear',
          '',
        ],
        assists: 7,
        damageDone: 22953,
        damageMitigated: 5245,
        damageStructures: 420,
        damageTaken: 12497,
        date: '20220310043610',
        deaths: 4,
        durationInMinutes: 19,
        durationInSeconds: 1189,
        god: 'Vulcan',
        godLevel: 20,
        gold: 13775,
        healing: 0,
        isRanked: false,
        isVictory: false,
        isWatchable: false,
        items: ['Purification Beads', 'Aegis Amulet'],
        kills: 3,
        map: 'Slash',
        masteryLevel: 116,
        matchId: 1229914631,
        patchVersion: '10.0',
        role: 'Unknown',
        wards: 2,
      };

      expect(smiteQLMatch).toEqual(expectedSmiteQLMatch);
    });
  });

  describe('processPartyDetails', () => {
    it('should process a match and output an object to describe parties', () => {
      const partyDetails = processPartyDetails(mockMatchDetails);

      const expectedPartyDetails = {
        partiesByPartyIds: {
          735488: {
            Kira474: '500755287',
            MexicanMagikarp: '504439576',
            Shinra_Tensei97: '500597761',
          },
        },
        partiesByPlayerIds: {
          Kira474: {
            Kira474: '500755287',
            MexicanMagikarp: '504439576',
            Shinra_Tensei97: '500597761',
          },
          MexicanMagikarp: {
            Kira474: '500755287',
            MexicanMagikarp: '504439576',
            Shinra_Tensei97: '500597761',
          },
          Shinra_Tensei97: {
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
