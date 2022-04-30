import moment from 'moment';

import { SmiteApi } from '../../../src/clients/SmiteApi';
import { smiteClient, SmiteQL } from '../../../src/clients/SmiteQL';
import CONSTANTS from '../../../src/constants';
import MOCKS from '../../../src/mocks';
import { RedisMockClient } from '../../setup/setupRedisMock';

const { SMITE_QL_KEYS } = CONSTANTS;
const { PLAYERS, GLOBAL } = SMITE_QL_KEYS;

const {
  // mocks are real data from Smite API
  mockMatchDetails,
  mockSingleMatchHistory,
  mockPlayer,
  mockGods,
  mockItems,
  mockPatchInfo,
} = MOCKS;

// TODO: make global expect objects for each significant object

describe('SmiteQL', () => {
  beforeEach(() => {
    // reset redis DB
    smiteClient.redis.flushAll();

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

    // simulate session_timestamp so smiteClient is ready
    smiteClient.session_timestamp = moment.utc();
  });

  describe('constructor', () => {
    it('should create and instance of smiteClient', () => {
      expect(smiteClient).toBeInstanceOf(SmiteQL);
    });
    it('should start with an instance of redis', () => {
      expect(smiteClient.redis).toBeInstanceOf(RedisMockClient);
    });
    it('should start with isReady false', () => {
      expect(smiteClient.isReady).toBe(false);
    });
  });

  describe('getMatchDetails', () => {
    beforeEach(async () => {
      await smiteClient.ready();

      jest.spyOn(SmiteApi.prototype, 'getMatchDetails').mockImplementation(() => {
        return mockMatchDetails;
      });
    });

    it('should get getMatchDetails object', async () => {
      const matchDetails = await smiteClient.getMatchDetails('12345', 'dhko');

      const expectedMatchDetails = expect.objectContaining({
        level: expect.any(Object),
        party: expect.any(Object),
        player: expect.any(Object),
        team: expect.any(Object),
        patch_version: '9_3',
      });

      expect(matchDetails).toEqual(expectedMatchDetails);
    });
  });

  describe('getMatchHistory', () => {
    beforeEach(async () => {
      await smiteClient.ready();

      jest.spyOn(SmiteApi.prototype, 'getPlayer').mockImplementation(() => {
        return mockPlayer;
      });
      jest.spyOn(SmiteApi.prototype, 'getMatchHistory').mockImplementation(() => {
        return mockSingleMatchHistory;
      });
    });

    it('should return an array of matchIds', async () => {
      const matchHistory = await smiteClient.getMatchHistory('any-player');
      const expectedMatchHistory = [expect.any(Number)];

      expect(matchHistory).toEqual(expectedMatchHistory);
    });
  });

  describe('getPlayer', () => {
    beforeEach(async () => {
      await smiteClient.ready();

      jest.spyOn(SmiteApi.prototype, 'getPlayer').mockImplementation(() => {
        return mockPlayer;
      });
    });

    it('should return playerInfo initial state', async () => {
      const data = await smiteClient.getPlayer('dhko');
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
      smiteClient.isReady = false;
      await smiteClient.redis.flushAll();
    });

    it('should set smiteClient.isReady to true', async () => {
      await smiteClient.ready();
      expect(smiteClient.isReady).toEqual(true);
    });
    it('should return false if smiteClient.ready was not already called', async () => {
      const ready = await smiteClient.ready();
      expect(ready).toEqual(false);
    });
    it('should return true if smiteClient.ready was already called', async () => {
      await smiteClient.ready();
      const ready = await smiteClient.ready();
      expect(ready).toEqual(true);
    });
    it('should set the initial state with players and global objects', async () => {
      await smiteClient.ready();
      const doesPlayersExist = await smiteClient._exists(PLAYERS);
      const doesGlobalExist = await smiteClient._exists(GLOBAL);
      expect(doesPlayersExist).toEqual(true);
      expect(doesGlobalExist).toEqual(true);
    });
  });
});
