import moment from 'moment';

import { SmiteApi } from '../../../src/clients/SmiteApi';
import { smiteRedisClient, SmiteRedis } from '../../../src/clients/SmiteRedis';
import CONSTANTS from '../../../src/constants';
import MOCKS from '../../../src/mocks';

const { SMITE_QL_KEYS } = CONSTANTS;
const { ENTRY, ROOT, PLAYERS, GLOBAL } = SMITE_QL_KEYS;

const {
  // mocks are real data from Smite API
  mockGods,
  mockItems,
  mockPatchInfo,
} = MOCKS;

// TODO: make global expect objects for each significant object

describe('SmiteRedis', () => {
  beforeEach(() => {
    // reset redis DB
    smiteRedisClient.redis.flushAll();

    // apply mocks so that we do not request real Smite API
    jest.spyOn(SmiteApi.prototype, 'getPatchInfo').mockImplementation(() => {
      return mockPatchInfo;
    });
    jest.spyOn(SmiteApi.prototype, 'getGods').mockImplementation(() => {
      return mockGods;
    });
    jest.spyOn(SmiteApi.prototype, 'getItems').mockImplementation(() => {
      return mockItems;
    });

    // simulate session_timestamp so smiteRedisClient is ready
    smiteRedisClient.session_timestamp = moment.utc();
  });

  describe('constructor', () => {
    it('should create and instance of SmiteApi', () => {
      expect(smiteRedisClient).toBeInstanceOf(SmiteRedis);
    });
    it('should start with isReady false', () => {
      expect(smiteRedisClient.isReady).toBe(false);
    });
  });

  describe('_assertReady', () => {
    it('should throw error if client is not ready', () => {
      smiteRedisClient.isReady = false;
      const fn = () => {
        smiteRedisClient._assertReady();
      };
      expect(fn).toThrow('SmiteQL connection is not ready. Call async function SmiteQL.ready()');
    });
    it('should not throw error if client is ready', () => {
      smiteRedisClient.isReady = true;
      smiteRedisClient.session_timestamp = moment.utc();

      const fn = () => {
        smiteRedisClient._assertReady();
      };
      expect(fn).not.toThrow('SmiteQL connection is not ready. Call async function SmiteQL.ready()');
    });
  });

  describe('_exists', () => {
    it('should return true if key exists', async () => {
      smiteRedisClient.redis.json.set(ENTRY, ROOT, { foo: 'bar' });
      const doesExist = await smiteRedisClient._exists('foo');
      expect(doesExist).toEqual(true);
    });
    it('should return false if key does not exist', async () => {
      smiteRedisClient.redis.json.set(ENTRY, ROOT, { foo: 'bar' });
      const doesExist = await smiteRedisClient._exists('bar');
      expect(doesExist).toEqual(false);
    });
  });

  describe('_get', () => {
    it('should get a value from a key from redis', async () => {
      smiteRedisClient.redis.json.set(ENTRY, ROOT, { foo: 'bar' });
      const data = await smiteRedisClient._get('foo');
      expect(data).toEqual('bar');
    });
  });

  describe('_set', () => {
    it('should add key value pair to the root of redis', async () => {
      await smiteRedisClient._set(ROOT, { foo: 'bar' });
      const data = smiteRedisClient.redis.json.get(ENTRY, { path: 'foo' });
      expect(data).toEqual('bar');
    });
    it('should add key value pair to redis', async () => {
      smiteRedisClient._set(ROOT, { foo: 'bar' });
      smiteRedisClient._set('foo.whatever', 'something');
      const data = await smiteRedisClient.redis.json.get(ENTRY, { path: 'foo.whatever' });
      expect(data).toEqual('something');
    });
  });

  describe('_reset', () => {
    it('should flush all values from redis', async () => {
      let exists;
      smiteRedisClient.redis.json.set(ENTRY, ROOT, { foo: 'bar' });
      exists = await smiteRedisClient._exists('foo');
      expect(exists).toEqual(true);
      await smiteRedisClient._reset();
      exists = await smiteRedisClient._exists('foo');
      expect(exists).toEqual(false);
    });
    it('should set isReady to false on smiteRedisClient', async () => {
      await smiteRedisClient.ready();
      expect(smiteRedisClient.isReady).toEqual(true);
      await smiteRedisClient._reset();
      expect(smiteRedisClient.isReady).toEqual(false);
    });
  });

  describe('ready', () => {
    beforeEach(async () => {
      smiteRedisClient.isReady = false;
      await smiteRedisClient.redis.flushAll();
    });

    it('should set smiteRedisClient.isReady to true', async () => {
      await smiteRedisClient.ready();
      expect(smiteRedisClient.isReady).toEqual(true);
    });
    it('should return false if smiteRedisClient.ready was not already called', async () => {
      const ready = await smiteRedisClient.ready();
      expect(ready).toEqual(false);
    });
    it('should return true if smiteRedisClient.ready was already called', async () => {
      await smiteRedisClient.ready();
      const ready = await smiteRedisClient.ready();
      expect(ready).toEqual(true);
    });
    it('should set the initial state with players and global objects', async () => {
      await smiteRedisClient.ready();
      const doesPlayersExist = await smiteRedisClient._exists(PLAYERS);
      const doesGlobalExist = await smiteRedisClient._exists(GLOBAL);
      expect(doesPlayersExist).toEqual(true);
      expect(doesGlobalExist).toEqual(true);
    });
  });

  describe('_getItems', () => {
    // TODO: Fill in
  });

  describe('_getGods', () => {
    // TODO: Fill in
  });
});
