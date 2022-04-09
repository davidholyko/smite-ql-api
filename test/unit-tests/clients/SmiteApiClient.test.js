import _ from 'lodash';

import { BaseSmiteClient } from '../../../src/clients/BaseSmiteClient';
import SmiteApiClient, { SmiteApiClient as Client } from '../../../src/clients/SmiteApiClient';
import CONSTANTS from '../../../src/constants';
import MOCKS from '../../../src/mocks';
import { RedisMockClient } from '../../setup/setupRedisMock';

const { REDIS, ERRORS } = CONSTANTS;
const { ENTRY, ROOT, PLAYERS, GLOBAL } = REDIS;
const { CLIENT_NOT_READY } = ERRORS;

const {
  // mocks are real data from Smite API
  mockMatchDetails,
  // mockMatchHistory,
  mockSingleMatchHistory,
  mockPlayer,
} = MOCKS;

// TODO: make global expect objects for each significant object

describe('SmiteApiClient', () => {
  beforeEach(() => {
    SmiteApiClient.redisClient.flushAll();
  });

  describe('constructor', () => {
    it('should create and instance of SmiteApiClient', () => {
      expect(SmiteApiClient).toBeInstanceOf(Client);
    });
    it('should start with an instance of RedisClient', () => {
      expect(SmiteApiClient.redisClient).toBeInstanceOf(RedisMockClient);
    });
    it('should start with isReady false', () => {
      expect(SmiteApiClient.isReady).toBe(false);
    });
  });

  describe('_assertReady', () => {
    it('should throw error if client is not ready', () => {
      SmiteApiClient.isReady = false;
      const fn = () => {
        SmiteApiClient._assertReady();
      };
      expect(fn).toThrow('RedisClient is not ready. Call async function SmiteApiClient.ready()');
    });
    it('should not throw erro if client is ready', () => {
      SmiteApiClient.isReady = true;
      const fn = () => {
        SmiteApiClient._assertReady();
      };
      expect(fn).not.toThrow(
        'RedisClient is not ready. Call async function SmiteApiClient.ready()',
      );
    });
  });

  describe('_exists', () => {
    it('should return true if key exists', async () => {
      SmiteApiClient.redisClient.json.set(ENTRY, ROOT, { foo: 'bar' });
      const doesExist = await SmiteApiClient._exists('foo');
      expect(doesExist).toEqual(true);
    });
    it('should return false if key does not exist', async () => {
      SmiteApiClient.redisClient.json.set(ENTRY, ROOT, { foo: 'bar' });
      const doesExist = await SmiteApiClient._exists('bar');
      expect(doesExist).toEqual(false);
    });
  });

  describe('_get', () => {
    it('should get a value from a key from redisClient', async () => {
      SmiteApiClient.redisClient.json.set(ENTRY, ROOT, { foo: 'bar' });
      const data = await SmiteApiClient._get('foo');
      expect(data).toEqual('bar');
    });
  });

  describe('_set', () => {
    it('should add key value pair to the root of redisClient', async () => {
      await SmiteApiClient._set(ROOT, { foo: 'bar' });
      const data = SmiteApiClient.redisClient.json.get(ENTRY, { path: 'foo' });
      expect(data).toEqual('bar');
    });
    it('should add key value pair to redisClient', async () => {
      SmiteApiClient._set(ROOT, { foo: 'bar' });
      SmiteApiClient._set('foo.whatever', 'something');
      const data = await SmiteApiClient.redisClient.json.get(ENTRY, { path: 'foo.whatever' });
      expect(data).toEqual('something');
    });
  });

  describe('_reset', () => {
    it('should flush all values from redis', async () => {
      let exists;
      SmiteApiClient.redisClient.json.set(ENTRY, ROOT, { foo: 'bar' });
      exists = await SmiteApiClient._exists('foo');
      expect(exists).toEqual(true);
      await SmiteApiClient._reset();
      exists = await SmiteApiClient._exists('foo');
      expect(exists).toEqual(false);
    });
    it('should set isReady to false on SmiteApiClient', async () => {
      await SmiteApiClient.ready();
      expect(SmiteApiClient.isReady).toEqual(true);
      await SmiteApiClient._reset();
      expect(SmiteApiClient.isReady).toEqual(false);
    });
  });

  describe('getMatchDetails', () => {
    beforeEach(async () => {
      await SmiteApiClient.ready();

      jest.spyOn(BaseSmiteClient.prototype, 'getMatchDetails').mockImplementation(() => {
        return mockMatchDetails;
      });
    });

    it('should throw an error if client is not ready', async () => {
      const errorMsg = new Error(CLIENT_NOT_READY);
      await SmiteApiClient._reset();

      try {
        await SmiteApiClient.getMatchDetails('12345');
      } catch (error) {
        expect(error).toEqual(errorMsg);
      }
    });

    it('should get getMatchDetails', async () => {
      const matchDetails = await SmiteApiClient.getMatchDetails('12345');
      const expectedMatchDetails = expect.arrayContaining([
        expect.objectContaining({
          hz_player_name: expect.any(String),
        }),
      ]);

      expect(matchDetails).toEqual(expectedMatchDetails);
    });
  });

  describe('getMatchHistory', () => {
    beforeEach(async () => {
      await SmiteApiClient.ready();

      jest.spyOn(BaseSmiteClient.prototype, 'getPlayer').mockImplementation(() => {
        return mockPlayer;
      });
      jest.spyOn(BaseSmiteClient.prototype, 'getMatchHistory').mockImplementation(() => {
        return mockSingleMatchHistory;
      });
    });

    it('should throw an error if client is not ready', async () => {
      const errorMsg = new Error(CLIENT_NOT_READY);
      await SmiteApiClient._reset();

      try {
        await SmiteApiClient.getMatchHistory('12345');
      } catch (error) {
        expect(error).toEqual(errorMsg);
      }
    });

    it('should get getMatchHistory', async () => {
      const matchHistory = await SmiteApiClient.getMatchHistory('12345');
      const matchObj = {
        date: expect.any(String),
        isVictory: expect.any(Boolean),
        matchId: expect.any(Number),
      };
      const expectedHistory = [expect.any(Number)];
      const expectedMatches = expect.objectContaining({
        [_.first(mockSingleMatchHistory).Match]: matchObj,
      });

      const expectedMatchHistory = expect.objectContaining({
        history: expectedHistory,
        matches: expectedMatches,
      });

      expect(matchHistory).toEqual(expectedMatchHistory);
    });
  });

  describe('getPlayer', () => {
    beforeEach(async () => {
      await SmiteApiClient.ready();

      jest.spyOn(BaseSmiteClient.prototype, 'getPlayer').mockImplementation(() => {
        return mockPlayer;
      });
    });

    it('should throw an error if client is not ready', async () => {
      const errorMsg = new Error(CLIENT_NOT_READY);
      await SmiteApiClient._reset();

      try {
        await SmiteApiClient.getPlayer('dhko');
      } catch (error) {
        expect(error).toEqual(errorMsg);
      }
    });

    it('should get playerInfo', async () => {
      const data = await SmiteApiClient.getPlayer('dhko');
      const expectedData = expect.objectContaining({
        hz_player_name: expect.any(String),
      });

      expect(data).toEqual({
        ign: expect.any(String),
        details: [expectedData],
        history: expect.any(Array),
        matches: expect.any(Object),
      });
    });
  });

  describe('ready', () => {
    beforeEach(async () => {
      SmiteApiClient.isReady = false;
      await SmiteApiClient.redisClient.flushAll();
    });

    it('should set SmiteApiClient.isReady to true', async () => {
      await SmiteApiClient.ready();
      expect(SmiteApiClient.isReady).toEqual(true);
    });
    it('should false if SmiteApiClient.ready was not already called', async () => {
      const ready = await SmiteApiClient.ready();
      expect(ready).toEqual(false);
    });
    it('should true if SmiteApiClient.ready was already called', async () => {
      await SmiteApiClient.ready();
      const ready = await SmiteApiClient.ready();
      expect(ready).toEqual(true);
    });
    it('should set the initial state with players and global objects', async () => {
      await SmiteApiClient.ready();
      const doesPlayersExist = await SmiteApiClient._exists(PLAYERS);
      const doesGlobalExist = await SmiteApiClient._exists(GLOBAL);
      expect(doesPlayersExist).toEqual(true);
      expect(doesGlobalExist).toEqual(true);
    });
  });
});
