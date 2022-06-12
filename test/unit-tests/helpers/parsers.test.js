import * as PARSERS from '../../../src/helpers/parsers';

const { parsePlayerName, parseIgn } = PARSERS;

describe('Parsers', () => {
  describe('parsePlayerName', () => {
    it('should remove clan tag from a player name', () => {
      const name = '[USA]dhko';
      const parsedName = parsePlayerName(name);
      expect(parsedName).toEqual('dhko');
    });
    it('should retain name if a player does not have a clan', () => {
      const name = 'dhko';
      const parsedName = parsePlayerName(name);
      expect(parsedName).toEqual('dhko');
    });
  });
  describe('parseIgn', () => {
    it('should parse an ign from a player object', () => {
      const player = {
        Reference_Name: 'Nu Wa',
        playerName: 'dhko',
      };

      const expectedIgn = { ign: '__dhko__', rawIgn: 'dhko' };
      const ign = parseIgn(player, 1);
      expect(ign).toEqual(expectedIgn);
    });
    it('should generate a player name based on god if player is hidden', () => {
      const player = {
        Reference_Name: 'Nu Wa',
        playerName: '',
      };

      const expectedIgn = { ign: '_Nu_Wa_1', rawIgn: '_Nu_Wa_1' };
      const ign = parseIgn(player, 1);
      expect(ign).toEqual(expectedIgn);
    });
  });
});
