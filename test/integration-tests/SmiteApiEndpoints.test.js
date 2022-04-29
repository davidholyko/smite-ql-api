import _ from 'lodash';

import { smiteApiClient } from '../../src/clients/SmiteApi';
import CONSTANTS from '../../src/constants';

const { API } = CONSTANTS;
const { DEV_ID, AUTH_KEY } = API;

describe('SmiteApi Endpoints', () => {
  let sessionId = null;
  // matchId is needed matches more than 50 games ago
  // are not available from Smite API
  let matchId = null;

  beforeEach(async () => {
    smiteApiClient.session_id = null;
    smiteApiClient.dev_id = DEV_ID;
    smiteApiClient.auth_key = AUTH_KEY;
  });

  it('should create session_id', async () => {
    const session = await smiteApiClient.createSession();
    // save sessionId to reuse session in test
    // avoids having a lot of sessions from unit tests
    sessionId = session.session_id;
    expect(sessionId).toEqual(expect.any(String));
  });

  describe('testSession', () => {
    beforeEach(() => {
      smiteApiClient.session_id = sessionId;
    });

    it('should return successful response message', async () => {
      const response = await smiteApiClient.testSession();
      const expectedResponse = expect.stringContaining(
        'This was a successful test with the following parameters added',
      );
      expect(response).toEqual(expectedResponse);
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

  describe('getMatchHistory', () => {
    beforeEach(() => {
      smiteApiClient.session_id = sessionId;
    });

    it('should get matchHistory for an playerId', async () => {
      const matchHistory = await smiteApiClient.getMatchHistory('dhko');
      const matchDetails = _.first(matchHistory);
      matchId = matchDetails.Match;

      const expectedMatch = expect.objectContaining({
        Match: expect.any(Number),
      });
      expect(matchDetails).toEqual(expectedMatch);
    });
    it('should error out if playerId doesnt exist', async () => {
      try {
        await smiteApiClient.getMatchHistory('_dhko');
      } catch (error) {
        const expectedError = new Error('Request failed with status code 400');
        expect(error).toEqual(expectedError);
      }
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
      const matchDetails = await smiteApiClient.getMatchDetails(matchId);
      const playerDetails = _.first(matchDetails);
      const expectedPlayer = expect.objectContaining({
        Match: expect.any(Number),
      });
      expect(playerDetails).toEqual(expectedPlayer);
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

  describe('getPlayer', () => {
    beforeEach(() => {
      smiteApiClient.session_id = sessionId;
    });

    it('should get Player details for an playerId', async () => {
      const playerDetails = await smiteApiClient.getPlayer('dhko');
      const player = _.first(playerDetails);
      expect(player).toEqual(
        expect.objectContaining({
          hz_player_name: expect.any(String),
        }),
      );
    });
    it('should error out if playerId doesnt exist', async () => {
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
