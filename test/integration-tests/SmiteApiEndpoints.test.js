import _ from 'lodash';

import { smiteApiClient } from '../../src/clients/SmiteApi';
import CONSTANTS from '../../src/constants';

const { API } = CONSTANTS;
const { DEV_ID, AUTH_KEY } = API;

describe('SmiteApi Endpoints', () => {
  let sessionId = null;

  it('should create sessionId', async () => {
    const session = await smiteApiClient.createSession();
    // save sessionId to reuse session in test
    // avoids having a lot of sessions from unit tests
    sessionId = session.session_id;
    expect(sessionId).toEqual(expect.any(String));
  });

  beforeEach(async () => {
    smiteApiClient.session_id = null;
    smiteApiClient.dev_id = DEV_ID;
    smiteApiClient.auth_key = AUTH_KEY;
  });

  describe('testSession', () => {
    afterEach(() => {
      jest.spyOn(smiteApiClient, '_performRequest').mockRestore();
    });

    it('should create a new session if a session_id does not already exist', async () => {
      smiteApiClient.session_id = null;
      await smiteApiClient.testSession();
      expect(smiteApiClient.session_id).not.toBe(null);
    });
    it('should get a successful response when pinging testsession endpoint', async () => {
      const fn = async () => {
        await smiteApiClient.testSession();
      };

      expect(fn).not.toThrow(undefined);
    });
    it('should throw error if response is not successful', async () => {
      jest.spyOn(smiteApiClient, '_performRequest').mockImplementation(() => {
        throw new Error('Simulated Error!');
      });

      const response = await smiteApiClient.testSession();

      const expectedError = new Error('Test Session Failed!');
      expect(response).toEqual(expectedError);
    });
  });

  describe('getUsedData', () => {
    beforeEach(() => {
      smiteApiClient.session_id = sessionId;
    });

    it('should get used data for a session', async () => {
      const dataUsed = await smiteApiClient.getDataUsed();
      const data = _.first(dataUsed);
      const expectedData = {
        Active_Sessions: expect.any(Number),
        Concurrent_Sessions: 50,
        Request_Limit_Daily: 15000,
        Session_Cap: 500,
        Session_Time_Limit: 15,
        Total_Requests_Today: expect.any(Number),
        Total_Sessions_Today: expect.any(Number),
        ret_msg: null,
      };
      expect(data).toEqual(expectedData);
    });
  });

  describe('getMatchDetails', () => {
    beforeEach(() => {
      smiteApiClient.session_id = sessionId;
    });

    it('should get matchDetails for a matchId', async () => {
      // TODO: this matchId is actually dependent on
      // the latest data from Smite API.
      // it should be exactly what the top match is for a given player
      // in the integrated test
      const matchDetails = await smiteApiClient.getMatchDetails('1233987056');
      const playerDetails = _.first(matchDetails);
      expect(playerDetails).toEqual(
        expect.objectContaining({
          Match: expect.any(Number),
        }),
      );
    });
    it('should error out if matchId doesnt exist', async () => {
      try {
        await smiteApiClient.getMatchDetails('abc123');
      } catch (error) {
        const expectedError = new Error('Request failed with status code 400');
        expect(error).toEqual(expectedError);
      }
    });
  });

  describe('getMatchHistory', () => {
    beforeEach(() => {
      smiteApiClient.session_id = sessionId;
    });

    it('should get matchHistory for an accountName', async () => {
      const matchHistory = await smiteApiClient.getMatchHistory('dhko');
      const matchDetails = _.first(matchHistory);
      expect(matchDetails).toEqual(
        expect.objectContaining({
          Match: expect.any(Number),
        }),
      );
    });
    it('should error out if accountName doesnt exist', async () => {
      try {
        await smiteApiClient.getMatchHistory('_dhko');
      } catch (error) {
        const expectedError = new Error('Request failed with status code 400');
        expect(error).toEqual(expectedError);
      }
    });
  });

  describe('getPlayer', () => {
    beforeEach(() => {
      smiteApiClient.session_id = sessionId;
    });

    it('should get Player details for an accountName', async () => {
      const playerDetails = await smiteApiClient.getPlayer('dhko');
      const player = _.first(playerDetails);
      expect(player).toEqual(
        expect.objectContaining({
          hz_player_name: expect.any(String),
        }),
      );
    });
    it('should error out if accountName doesnt exist', async () => {
      try {
        await smiteApiClient.getPlayer('_dhko');
      } catch (error) {
        const expectedError = new Error('Request failed with status code 400');
        expect(error).toEqual(expectedError);
      }
    });
  });

  describe('ping', () => {
    beforeEach(() => {
      smiteApiClient.session_id = sessionId;
    });

    it('should get ping Smite API', async () => {
      const response = await smiteApiClient.ping();
      expect(response).toEqual(expect.stringContaining('Ping successful.'));
    });
  });
});
