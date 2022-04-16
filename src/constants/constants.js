const { DEV_ID, AUTH_KEY } = process.env;

export const API = {
  DEV_ID: DEV_ID,
  AUTH_KEY: AUTH_KEY,
  BASE_URL: 'https://api.smitegame.com/smiteapi.svc',
  RESPONSE_FORMAT: 'Json',
  TIME_FORMAT: 'yyyyMMDDHHmmss',
  SESSION_ID: 'session_id',
  JSON: 'Json',
};

export const METHODS = {
  TEST_SESSION: 'testsession',
  CREATE_SESSION: 'createsession',
  GET_PLAYER: 'getplayer',
  GET_MATCH_HISTORY: 'getmatchhistory',
  GET_MATCH_DETAILS: 'getmatchdetails',
  GET_DATA_USED: 'getdataused',
  PING: 'ping',
  GET_PATCH_INFO: 'getpatchinfo',
  GET_ITEMS: 'getitems',
  GET_HIREZ_SERVER_STATUS: 'gethirezserverstatus',
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
  ENTRY: 'smite_ql',
  ROOT: '$',
  MATCHES: 'matches',
  PLAYERS: 'players',
  NAMES: 'name',
  HISTORY: 'history',
  DETAILS: 'details',
  GLOBAL: 'global',
  PATCH_VERSIONS: 'patch_versions',
  MISC: 'misc',
  ITEMS: 'items',
};

export const SMITE_QL = {
  IGN: 'ign',
  HZ_PLAYER_NAME: 'hz_player_name',
};

export const ERRORS = {
  CLIENT_NOT_READY: 'SmiteQL.redis is not ready. Call async function SmiteQL.ready()',
};
