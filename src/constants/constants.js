const { DEV_ID, AUTH_KEY } = process.env;

export const API = {
  DEV_ID: DEV_ID,
  AUTH_KEY: AUTH_KEY,
  BASE_URL: 'https://api.smitegame.com/smiteapi.svc',
  RESPONSE_FORMAT: 'Json',
  TIME_FORMAT: 'yyyyMMDDHHmmss',
};

export const METHODS = {
  TEST_SESSION: 'testsession',
  TEST_SESSION_JSON: 'testsessionJson',
  CREATE_SESSION: 'createsession',
  CREATE_SESSION_JSON: 'createsessionJson',
  GET_PLAYER: 'getplayer',
  GET_PLAYER_JSON: 'getplayerJson',
  GET_MATCH_HISTORY: 'getmatchhistory',
  GET_MATCH_HISTORY_JSON: 'getmatchhistoryJson',
  GET_MATCH_DETAILS: 'getmatchdetails',
  GET_MATCH_DETAILS_JSON: 'getmatchdetailsJson',
};