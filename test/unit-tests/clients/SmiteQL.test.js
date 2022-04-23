import { SmiteApi } from '../../../src/clients/SmiteApi';
import { smiteQLClient, SmiteQL } from '../../../src/clients/SmiteQL';
import CONSTANTS from '../../../src/constants';
import MOCKS from '../../../src/mocks';
import { RedisMockClient } from '../../setup/setupRedisMock';

const { SMITE_QL_KEYS, ERRORS } = CONSTANTS;
const { ENTRY, ROOT, PLAYERS, GLOBAL } = SMITE_QL_KEYS;
const { CLIENT_NOT_READY } = ERRORS;

const {
  // mocks are real data from Smite API
  mockMatchDetails,
  mockSingleMatchHistory,
  mockPlayer,
} = MOCKS;

// TODO: make global expect objects for each significant object

describe('SmiteQL', () => {
  beforeEach(() => {
    smiteQLClient.redis.flushAll();
  });

  describe('constructor', () => {
    it('should create and instance of smiteQLClient', () => {
      expect(smiteQLClient).toBeInstanceOf(SmiteQL);
    });
    it('should start with an instance of redis', () => {
      expect(smiteQLClient.redis).toBeInstanceOf(RedisMockClient);
    });
    it('should start with isReady false', () => {
      expect(smiteQLClient.isReady).toBe(false);
    });
  });

  describe('_assertReady', () => {
    it('should throw error if client is not ready', () => {
      smiteQLClient.isReady = false;
      const fn = () => {
        smiteQLClient._assertReady();
      };
      expect(fn).toThrow('SmiteQL.redis is not ready. Call async function SmiteQL.ready()');
    });
    it('should not throw erro if client is ready', () => {
      smiteQLClient.isReady = true;
      const fn = () => {
        smiteQLClient._assertReady();
      };
      expect(fn).not.toThrow('SmiteQL.redis is not ready. Call async function SmiteQL.ready()');
    });
  });

  describe('_exists', () => {
    it('should return true if key exists', async () => {
      smiteQLClient.redis.json.set(ENTRY, ROOT, { foo: 'bar' });
      const doesExist = await smiteQLClient._exists('foo');
      expect(doesExist).toEqual(true);
    });
    it('should return false if key does not exist', async () => {
      smiteQLClient.redis.json.set(ENTRY, ROOT, { foo: 'bar' });
      const doesExist = await smiteQLClient._exists('bar');
      expect(doesExist).toEqual(false);
    });
  });

  describe('_get', () => {
    it('should get a value from a key from redis', async () => {
      smiteQLClient.redis.json.set(ENTRY, ROOT, { foo: 'bar' });
      const data = await smiteQLClient._get('foo');
      expect(data).toEqual('bar');
    });
  });

  describe('_set', () => {
    it('should add key value pair to the root of redis', async () => {
      await smiteQLClient._set(ROOT, { foo: 'bar' });
      const data = smiteQLClient.redis.json.get(ENTRY, { path: 'foo' });
      expect(data).toEqual('bar');
    });
    it('should add key value pair to redis', async () => {
      smiteQLClient._set(ROOT, { foo: 'bar' });
      smiteQLClient._set('foo.whatever', 'something');
      const data = await smiteQLClient.redis.json.get(ENTRY, { path: 'foo.whatever' });
      expect(data).toEqual('something');
    });
  });

  describe('_reset', () => {
    it('should flush all values from redis', async () => {
      let exists;
      smiteQLClient.redis.json.set(ENTRY, ROOT, { foo: 'bar' });
      exists = await smiteQLClient._exists('foo');
      expect(exists).toEqual(true);
      await smiteQLClient._reset();
      exists = await smiteQLClient._exists('foo');
      expect(exists).toEqual(false);
    });
    it('should set isReady to false on smiteQLClient', async () => {
      await smiteQLClient.ready();
      expect(smiteQLClient.isReady).toEqual(true);
      await smiteQLClient._reset();
      expect(smiteQLClient.isReady).toEqual(false);
    });
  });

  describe('getMatchDetails', () => {
    beforeEach(async () => {
      await smiteQLClient.ready();

      jest.spyOn(SmiteApi.prototype, 'getMatchDetails').mockImplementation(() => {
        return mockMatchDetails;
      });
    });

    it('should throw an error if client is not ready', async () => {
      const errorMsg = new Error(CLIENT_NOT_READY);
      await smiteQLClient._reset();

      try {
        await smiteQLClient.getMatchDetails('12345');
      } catch (error) {
        expect(error).toEqual(errorMsg);
      }
    });

    it('should get getMatchDetails', async () => {
      const matchDetails = await smiteQLClient.getMatchDetails('12345');
      const expectedRawDetails = expect.arrayContaining([
        expect.objectContaining({
          hz_player_name: expect.any(String),
        }),
      ]);

      const expectedPartyDetails = expect.objectContaining({
        partiesByPartyIds: expect.any(Object),
        partiesByPlayerIds: expect.any(Object),
      });

      const expectedMatchDetails = expect.objectContaining({
        raw: expectedRawDetails,
        party: expectedPartyDetails,
      });

      expect(matchDetails).toEqual(expectedMatchDetails);
    });
  });

  describe('getMatchHistory', () => {
    beforeEach(async () => {
      await smiteQLClient.ready();

      jest.spyOn(SmiteApi.prototype, 'getPlayer').mockImplementation(() => {
        return mockPlayer;
      });
      jest.spyOn(SmiteApi.prototype, 'getMatchHistory').mockImplementation(() => {
        return mockSingleMatchHistory;
      });
    });

    it('should throw an error if client is not ready', async () => {
      const errorMsg = new Error(CLIENT_NOT_READY);
      await smiteQLClient._reset();

      try {
        await smiteQLClient.getMatchHistory('12345');
      } catch (error) {
        expect(error).toEqual(errorMsg);
      }
    });

    it('should return an array of matchIds', async () => {
      const matchHistory = await smiteQLClient.getMatchHistory('any-player');
      const expectedMatchHistory = [expect.any(Number)];

      expect(matchHistory).toEqual(expectedMatchHistory);
    });
  });

  describe('getPlayer', () => {
    beforeEach(async () => {
      await smiteQLClient.ready();

      jest.spyOn(SmiteApi.prototype, 'getPlayer').mockImplementation(() => {
        return mockPlayer;
      });
    });

    it('should throw an error if client is not ready', async () => {
      const errorMsg = new Error(CLIENT_NOT_READY);
      await smiteQLClient._reset();

      try {
        await smiteQLClient.getPlayer('dhko');
      } catch (error) {
        expect(error).toEqual(errorMsg);
      }
    });

    it('should return playerInfo initial state', async () => {
      const data = await smiteQLClient.getPlayer('dhko');
      const expectedMatches = expect.objectContaining({
        wins: [],
        losses: [],
      });
      const expectedDetails = expect.objectContaining({
        hz_player_name: expect.any(String),
      });

      expect(data).toEqual({
        schema_version: '1.0.0',
        account_number: expect.any(Number),
        ign: expect.any(String),
        details: expectedDetails,
        history: expect.any(Array),
        matches: expect.any(Object),
        ranked: expectedMatches,
        normal: expectedMatches,
      });
    });
  });

  describe('ready', () => {
    beforeEach(async () => {
      smiteQLClient.isReady = false;
      await smiteQLClient.redis.flushAll();
    });

    it('should set smiteQLClient.isReady to true', async () => {
      await smiteQLClient.ready();
      expect(smiteQLClient.isReady).toEqual(true);
    });
    it('should return false if smiteQLClient.ready was not already called', async () => {
      const ready = await smiteQLClient.ready();
      expect(ready).toEqual(false);
    });
    it('should return true if smiteQLClient.ready was already called', async () => {
      await smiteQLClient.ready();
      const ready = await smiteQLClient.ready();
      expect(ready).toEqual(true);
    });
    it('should set the initial state with players and global objects', async () => {
      await smiteQLClient.ready();
      const doesPlayersExist = await smiteQLClient._exists(PLAYERS);
      const doesGlobalExist = await smiteQLClient._exists(GLOBAL);
      expect(doesPlayersExist).toEqual(true);
      expect(doesGlobalExist).toEqual(true);
    });
  });
});
