import SmiteApiClient, { SmiteApiClient as Client } from '../../../src/clients/SmiteApiClient';
import { RedisMockClient } from '../../setup/setupRedisMock';

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
    //
  });

  describe('_get', () => {
    //
  });

  describe('_set', () => {
    it('should add key value pair to the root of redisClient', () => {
      SmiteApiClient._set('$', { foo: 'bar' });
      const data = SmiteApiClient.redisClient.json.get('smite:ql', { path: 'foo' });
      expect(data).toEqual('bar');
    });
    it('should add key value pair to redisClient', () => {
      SmiteApiClient._set('$', { foo: 'bar' });
      SmiteApiClient._set('foo.whatever', 'something');
      const data = SmiteApiClient.redisClient.json.get('smite:ql', { path: 'foo.whatever' });
      expect(data).toEqual('something');
    });
  });

  describe('getMatchDetails', () => {
    //
  });

  describe('getMatchHistory', () => {
    //
  });

  describe('getPlayer', () => {
    //
  });

  describe('ready', () => {
    //
  });
});
