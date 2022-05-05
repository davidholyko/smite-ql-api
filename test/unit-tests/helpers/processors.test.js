import _ from 'lodash';

import * as PROCESSORS from '../../../src/helpers/processors';
import MOCKS from '../../../src/mocks';

const {
  // processors
  processMatchHistory,
  processPlayerDetails,
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

  describe('processPlayerDetails', () => {
    it('should process raw data into a SmiteQL match object', () => {
      const smiteQLMatch = processPlayerDetails(mockMatchDetails, patchVersion);
      const expectedSmiteQLMatch = {
        accountLevel: 160,
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
        godActives: ['Purification Beads', 'Aegis Amulet'],
        godItems: [
          'Evolved Book of Thoth',
          'Spear of Desolation',
          'Spear of the Magus',
          'Calamitous Rod of Tahuti',
          'Enchanted Spear',
        ],
        gold: 13775,
        healing: 0,
        isRanked: false,
        isVictory: false,
        isWatchable: false,
        kills: 3,
        map: 'Slash',
        masteryLevel: 116,
        matchId: 1229914631,
        patchVersion: '10.0',
        role: 'Unknown',
        wards: 2,
      };

      expect(smiteQLMatch['dhko']).toEqual(expectedSmiteQLMatch);
    });
  });

  describe('processPartyDetails', () => {
    it('should process a match and output an object to describe parties', () => {
      const partyDetails = processPartyDetails(mockMatchDetails);

      const expectedPartyDetails = {
        parties: {
          losers: [
            [{ god: 'Janus', ign: 'DesertGardener', partyId: 612260 }],
            [{ god: 'Danzaburou', ign: '_Danzaburou_8', partyId: 672168 }],
            [{ god: 'Vulcan', ign: 'dhko', partyId: 732129 }],
            [{ god: 'Bastet', ign: 'Mowo089', partyId: 743320 }],
            [{ god: 'Kumbhakarna', ign: 'declan129', partyId: 753174 }],
          ],
          winners: [
            [
              { god: 'Mulan', ign: 'Kira474', partyId: 735488 },
              { god: 'Shiva', ign: 'MexicanMagikarp', partyId: 735488 },
              { god: 'Odin', ign: 'Shinra_Tensei97', partyId: 735488 },
            ],
            [{ god: 'Olorun', ign: 'NickiMinajVËVO', partyId: 742515 }],
            [{ god: 'Nu Wa', ign: 'dalvon21', partyId: 753091 }],
          ],
          players: {
            DesertGardener: { DesertGardener: { god: 'Janus', ign: 'DesertGardener', partyId: 612260 } },
            Kira474: {
              Kira474: { god: 'Mulan', ign: 'Kira474', partyId: 735488 },
              MexicanMagikarp: { god: 'Shiva', ign: 'MexicanMagikarp', partyId: 735488 },
              Shinra_Tensei97: { god: 'Odin', ign: 'Shinra_Tensei97', partyId: 735488 },
            },
            MexicanMagikarp: {
              Kira474: { god: 'Mulan', ign: 'Kira474', partyId: 735488 },
              MexicanMagikarp: { god: 'Shiva', ign: 'MexicanMagikarp', partyId: 735488 },
              Shinra_Tensei97: { god: 'Odin', ign: 'Shinra_Tensei97', partyId: 735488 },
            },
            Mowo089: { Mowo089: { god: 'Bastet', ign: 'Mowo089', partyId: 743320 } },
            NickiMinajVËVO: { NickiMinajVËVO: { god: 'Olorun', ign: 'NickiMinajVËVO', partyId: 742515 } },
            Shinra_Tensei97: {
              Kira474: { god: 'Mulan', ign: 'Kira474', partyId: 735488 },
              MexicanMagikarp: { god: 'Shiva', ign: 'MexicanMagikarp', partyId: 735488 },
              Shinra_Tensei97: { god: 'Odin', ign: 'Shinra_Tensei97', partyId: 735488 },
            },
            _Danzaburou_8: { _Danzaburou_8: { god: 'Danzaburou', ign: '_Danzaburou_8', partyId: 672168 } },
            dalvon21: { dalvon21: { god: 'Nu Wa', ign: 'dalvon21', partyId: 753091 } },
            declan129: { declan129: { god: 'Kumbhakarna', ign: 'declan129', partyId: 753174 } },
            dhko: { dhko: { god: 'Vulcan', ign: 'dhko', partyId: 732129 } },
          },
        },
      };

      expect(partyDetails).toEqual(expectedPartyDetails);
    });
  });

  describe('processRecentMatchHistory', () => {
    // TODO
  })
});
