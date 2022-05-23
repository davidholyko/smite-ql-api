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
        ign: '__dhko__',
        isCustom: false,
        isRanked: false,
        isVictory: false,
        isWatchable: false,
        kills: 3,
        map: 'Slash',
        mapValue: 'Slash',
        masteryLevel: 116,
        matchType: 'Normal: Slash',
        matchId: 1229914631,
        platform: 'HIREZ',
        patchVersion: '10.0',
        rawIgn: 'dhko',
        role: 'Unknown',
        wards: 2,
      };

      expect(smiteQLMatch['__dhko__']).toEqual(expectedSmiteQLMatch);
    });
  });

  describe('processPartyDetails', () => {
    it('should process a match and output an object to describe parties', () => {
      const partyDetails = processPartyDetails(mockMatchDetails);

      const expectedPartyDetails = {
        parties: {
          losers: [
            [
              {
                god: 'Janus',
                ign: '__desertgardener__',
                level: 160,
                partyId: 612260,
                platform: 'STEAM',
                rawIgn: 'DesertGardener',
              },
            ],
            [
              {
                god: 'Danzaburou',
                ign: '_Danzaburou_8',
                level: 156,
                partyId: 672168,
                platform: 'STEAM',
                rawIgn: '_Danzaburou_8',
              },
            ],
            [
              {
                god: 'Vulcan', //
                ign: '__dhko__',
                level: 160,
                partyId: 732129,
                platform: 'HIREZ',
                rawIgn: 'dhko',
              },
            ],
            [
              {
                god: 'Bastet', //
                ign: '__mowo089__',
                level: 121,
                partyId: 743320,
                platform: 'STEAM',
                rawIgn: 'Mowo089',
              },
            ],
            [
              {
                god: 'Kumbhakarna',
                ign: '__declan129__',
                level: 123,
                partyId: 753174,
                platform: 'XBOX',
                rawIgn: 'declan129',
              },
            ],
          ],
          players: {
            _Danzaburou_8: {
              _Danzaburou_8: {
                god: 'Danzaburou',
                ign: '_Danzaburou_8',
                level: 156,
                partyId: 672168,
                platform: 'STEAM',
                rawIgn: '_Danzaburou_8',
              },
            },
            __dalvon21__: {
              __dalvon21__: {
                god: 'Nu Wa',
                ign: '__dalvon21__',
                level: 144,
                partyId: 753091,
                platform: 'XBOX',
                rawIgn: 'dalvon21',
              },
            },
            __declan129__: {
              __declan129__: {
                god: 'Kumbhakarna',
                ign: '__declan129__',
                level: 123,
                partyId: 753174,
                platform: 'XBOX',
                rawIgn: 'declan129',
              },
            },
            __desertgardener__: {
              __desertgardener__: {
                god: 'Janus',
                ign: '__desertgardener__',
                level: 160,
                partyId: 612260,
                platform: 'STEAM',
                rawIgn: 'DesertGardener',
              },
            },
            __dhko__: {
              __dhko__: {
                god: 'Vulcan',
                ign: '__dhko__',
                level: 160,
                partyId: 732129,
                platform: 'HIREZ',
                rawIgn: 'dhko',
              },
            },
            __kira474__: {
              __kira474__: {
                god: 'Mulan',
                ign: '__kira474__',
                level: 155,
                partyId: 735488,
                platform: 'PS4',
                rawIgn: 'Kira474',
              },
              __mexicanmagikarp__: {
                god: 'Shiva',
                ign: '__mexicanmagikarp__',
                level: 146,
                partyId: 735488,
                platform: 'PS4',
                rawIgn: 'MexicanMagikarp',
              },
              __shinra_tensei97__: {
                god: 'Odin',
                ign: '__shinra_tensei97__',
                level: 158,
                partyId: 735488,
                platform: 'PS4',
                rawIgn: 'Shinra_Tensei97',
              },
            },
            __mexicanmagikarp__: {
              __kira474__: {
                god: 'Mulan',
                ign: '__kira474__',
                level: 155,
                partyId: 735488,
                platform: 'PS4',
                rawIgn: 'Kira474',
              },
              __mexicanmagikarp__: {
                god: 'Shiva',
                ign: '__mexicanmagikarp__',
                level: 146,
                partyId: 735488,
                platform: 'PS4',
                rawIgn: 'MexicanMagikarp',
              },
              __shinra_tensei97__: {
                god: 'Odin',
                ign: '__shinra_tensei97__',
                level: 158,
                partyId: 735488,
                platform: 'PS4',
                rawIgn: 'Shinra_Tensei97',
              },
            },
            __mowo089__: {
              __mowo089__: {
                god: 'Bastet',
                ign: '__mowo089__',
                level: 121,
                partyId: 743320,
                platform: 'STEAM',
                rawIgn: 'Mowo089',
              },
            },
            __nickiminajvëvo__: {
              __nickiminajvëvo__: {
                god: 'Olorun',
                ign: '__nickiminajvëvo__',
                level: 148,
                partyId: 742515,
                platform: 'STEAM',
                rawIgn: 'NickiMinajVËVO',
              },
            },
            __shinra_tensei97__: {
              __kira474__: {
                god: 'Mulan',
                ign: '__kira474__',
                level: 155,
                partyId: 735488,
                platform: 'PS4',
                rawIgn: 'Kira474',
              },
              __mexicanmagikarp__: {
                god: 'Shiva',
                ign: '__mexicanmagikarp__',
                level: 146,
                partyId: 735488,
                platform: 'PS4',
                rawIgn: 'MexicanMagikarp',
              },
              __shinra_tensei97__: {
                god: 'Odin',
                ign: '__shinra_tensei97__',
                level: 158,
                partyId: 735488,
                platform: 'PS4',
                rawIgn: 'Shinra_Tensei97',
              },
            },
          },
          winners: [
            [
              {
                god: 'Mulan', //
                ign: '__kira474__',
                level: 155,
                partyId: 735488,
                platform: 'PS4',
                rawIgn: 'Kira474',
              },
              {
                god: 'Shiva',
                ign: '__mexicanmagikarp__',
                level: 146,
                partyId: 735488,
                platform: 'PS4',
                rawIgn: 'MexicanMagikarp',
              },
              {
                god: 'Odin',
                ign: '__shinra_tensei97__',
                level: 158,
                partyId: 735488,
                platform: 'PS4',
                rawIgn: 'Shinra_Tensei97',
              },
            ],
            [
              {
                god: 'Olorun',
                ign: '__nickiminajvëvo__',
                level: 148,
                partyId: 742515,
                platform: 'STEAM',
                rawIgn: 'NickiMinajVËVO',
              },
            ],
            [
              {
                god: 'Nu Wa', //
                ign: '__dalvon21__',
                level: 144,
                partyId: 753091,
                platform: 'XBOX',
                rawIgn: 'dalvon21',
              },
            ],
          ],
        },
      };

      expect(partyDetails).toEqual(expectedPartyDetails);
    });
  });

  describe('processRecentMatchHistory', () => {
    // TODO: fill in
  });
});
