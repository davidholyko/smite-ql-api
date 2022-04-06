import _ from 'lodash';

import BaseSmiteClient from '../../src/clients/BaseSmiteClient';
import CONSTANTS from '../../src/constants';

const { API } = CONSTANTS;
const { DEV_ID, AUTH_KEY } = API;

describe('BaseSmiteClient Endpoints', () => {
  let sessionId = null;

  it('should create sessionId', async () => {
    const session = await BaseSmiteClient.createSession();
    // save sessionId to reuse session in test
    // avoids having a lot of sessions from unit tests
    sessionId = session.session_id;
    expect(sessionId).toEqual(expect.any(String));
  });

  beforeEach(async () => {
    BaseSmiteClient.session_id = null;
    BaseSmiteClient.dev_id = DEV_ID;
    BaseSmiteClient.auth_key = AUTH_KEY;
  });

  describe('testSession', () => {
    it('should create a new session if a session_id does not already exist', async () => {
      BaseSmiteClient.session_id = null;
      await BaseSmiteClient.testSession();
      expect(BaseSmiteClient.session_id).not.toBe(null);
    });
    it('should get a successful response when pinging testsession endpoint', async () => {
      const fn = async () => {
        await BaseSmiteClient.testSession();
      };

      expect(fn).not.toThrow(undefined);
    });
    it('should throw error if response is not successful', async () => {
      BaseSmiteClient.dev_id = '1111';
      try {
        await BaseSmiteClient.testSession();
      } catch (error) {
        const expectedError = new Error('Test Session Failed!');
        expect(error).toEqual(expectedError);
      }
    });
  });

  describe('getUsedData', () => {
    beforeEach(() => {
      BaseSmiteClient.session_id = sessionId;
    });

    it('should get used data for a session', async () => {
      const dataUsed = await BaseSmiteClient.getDataUsed();
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
      BaseSmiteClient.session_id = sessionId;
    });

    it('should get matchDetails for a matchId', async () => {
      const matchDetails = await BaseSmiteClient.getMatchDetails('1229914631');
      const playerDetails = _.first(matchDetails);
      expect(playerDetails).toEqual(
        expect.objectContaining({
          Match: expect.any(Number),
        }),
      );
    });
    it('should error out if matchId doesnt exist', async () => {
      try {
        await BaseSmiteClient.getMatchDetails('abc123');
      } catch (error) {
        const expectedError = new Error('Request failed with status code 400');
        expect(error).toEqual(expectedError);
      }
    });
  });

  describe('getMatchHistory', () => {
    beforeEach(() => {
      BaseSmiteClient.session_id = sessionId;
    });

    it('should get matchHistory for an accountName', async () => {
      const matchHistory = await BaseSmiteClient.getMatchHistory('dhko');
      const matchDetails = _.first(matchHistory);
      expect(matchDetails).toEqual(
        expect.objectContaining({
          Match: expect.any(Number),
        }),
      );
    });
    it('should error out if accountName doesnt exist', async () => {
      try {
        await BaseSmiteClient.getMatchHistory('_dhko');
      } catch (error) {
        const expectedError = new Error('Request failed with status code 400');
        expect(error).toEqual(expectedError);
      }
    });
  });

  describe('getPlayer', () => {
    beforeEach(() => {
      BaseSmiteClient.session_id = sessionId;
    });

    it('should get Player details for an accountName', async () => {
      const playerDetails = await BaseSmiteClient.getPlayer('dhko');
      const player = _.first(playerDetails);
      expect(player).toEqual(
        expect.objectContaining({
          hz_player_name: expect.any(String),
        }),
      );
    });
    it('should error out if accountName doesnt exist', async () => {
      try {
        await BaseSmiteClient.getPlayer('_dhko');
      } catch (error) {
        const expectedError = new Error('Request failed with status code 400');
        expect(error).toEqual(expectedError);
      }
    });
  });
});
