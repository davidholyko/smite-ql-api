const { DEV_ID, AUTH_KEY } = process.env;

export const API = {
  DEV_ID: DEV_ID,
  AUTH_KEY: AUTH_KEY,
  BASE_URL: 'https://api.smitegame.com/smiteapi.svc',
  RESPONSE_FORMAT: 'Json',
  TIME_FORMAT: 'yyyyMMDDHHmmss',
  SESSION_ID: 'session_id',
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
  GET_DATA_USED: 'getdataused',
  GET_DATA_USED_JSON: 'getdatausedJson',
  PING: 'ping',
  PING_JSON: 'pingJson',
  GET_PATCH_INFO_JSON: 'getpatchinfoJson',
  GET_PATCH_INFO: 'getpatchinfo',
  GET_ITEMS_JSON: 'getitemsJson',
  GET_ITEMS: 'getitems',
};

export const LANGS = {
  ENGLISH: 1,
  GERMAN: 2,
  FRENCH: 3,
  CHINESE: 5,
  SPANISH: 7,
  SPANISH_LATAM: 9,
  PORTUGUESE: 10,
  RUSSIAN: 11,
  POLISH: 12,
  TURKISH: 13,
};

export const REDIS = {
  ENTRY: 'smite:ql',
  ROOT: '$',
  MATCHES: 'matches',
  PLAYERS: 'players',
  NAMES: 'name',
  HISTORY: 'history',
  DETAILS: 'details',
  GLOBAL: 'global',
};

export const SMITE_QL = {
  IGN: 'ign',
  HZ_PLAYER_NAME: 'hz_player_name',
};

export const ERRORS = {
  CLIENT_NOT_READY: 'RedisClient is not ready. Call async function SmiteApiClient.ready()',
};
