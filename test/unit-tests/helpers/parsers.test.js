import * as PARSERS from '../../../src/helpers/parsers';

const { parsePlayerName } = PARSERS;

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
});
