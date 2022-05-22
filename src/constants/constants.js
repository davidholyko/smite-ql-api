const {
  //
  DEV_ID,
  AUTH_KEY,
  NODE_ENV,
  REDIS_HOST,
  REDIS_PORT,
  REDIS_AUTH,
  PORT,
} = process.env;
const isProd = NODE_ENV === 'production';

export const API = {
  DEV_ID: DEV_ID,
  AUTH_KEY: AUTH_KEY,
  BASE_URL: 'https://api.smitegame.com/smiteapi.svc',
  RESPONSE_FORMAT: 'Json',
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
  GET_GODS: 'getgods',
  GET_GOD_ALT_ABILTIES: 'getgodaltabilities',
  GET_GOD_SKINS: 'getgodskins',
  GET_PLAYERID_BY_NAME: 'getplayeridbyname',
  GET_PLAYERIDS_BY_GAMER_TAG: 'getplayeridsbygamertag',
};

export const QUEUE_IDS = {
  NORMAL_CONQUEST: 426,
  NORMAL_ARENA: 435,
  NORMAL_JOUST: 448,
  NORMAL_SLASH: 448,
  NORMAL_ASSAULT: 10189,
  RANKED_CONQUEST_PC: 451,
  RANKED_CONQUEST_CONTROLLER: 504,
  RANKED_JOUST: 450,
  RANKED_DUEL: 440, // Official name is 'Ranked Joust 1v1'
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

export const SMITE_QL_KEYS = {
  ENTRY: 'smite_ql',
  ROOT: '$',
  MATCHES: 'matches',
  PLAYERS: 'players',
  NAMES: 'name',
  HISTORY: 'history',
  DETAILS: 'details',
  GLOBAL: 'global',
  PATCH_VERSION: 'patch_version',
  PATCH_VERSIONS: 'patch_versions',
  MISC: 'misc',
  ITEMS: 'items',
  RANKED: 'ranked',
  NORMAL: 'normal',
  WINS: 'wins',
  LOSSES: 'losses',
  IGN: 'ign',
  CURRENT_PATCH: 'current_patch',
  PREVIOUS_PATCHES: 'previous_patches',
  ACCOUNT_NUMBER: 'account_number',
  RAW: 'raw',
  PARTY: 'party',
  GODS: 'gods',
  TEAM: 'team',
  LEVEL: 'level',
  PLAYER: 'player',
  SCHEMA_VERSIONS: 'schema_versions',
  CURRENT_SCHEMA: 'current_schema',
  PREVIOUS_SCEHMA: 'previous_schema',
  SCHEMA_VERSION: 'schema_version',
  RAW_MATCHES: 'raw_matches',
  OVERALL: 'overall',
  LAST_UPDATED: 'last_updated',
};

export const SMITE_API_KEYS = {
  HZ_PLAYER_NAME: 'hz_player_name',
  MATCH: 'Match',
  ENTRY_DATETIME: 'Entry_Datetime',
  WIN_STATUS: 'Win_Status',
  MAP_GAME: 'Map_Game',
  MATCH_DURATION: 'Match_Duration',
  REFERENCE_NAME: 'Reference_Name',
  NAME: 'name',
  PLAYER_ID: 'playerId',
  PARTY_ID: 'PartyId',
  PLAYER_NAME: 'playerName',
  ID: 'Id',
};

export const ERRORS = {
  CLIENT_NOT_READY: 'SmiteQL connection is not ready. Call async function SmiteQL.ready()',
  SESSION_EXPIRED: 'SmiteQL session is expired. Make a new session with SmiteApi.createSession().',
  PATCH_VERSION_NOT_SET: 'Patch version has not been set.',
  SCAN_MATCH_HISTORY_FAILURE: 'Options must contain one of: [index, limit] but not both',
};

export const SERVER = {
  PORT: PORT || 8080,
};

export const REDIS = {
  HOST: isProd ? REDIS_HOST : '127.0.0.1',
  PORT: isProd ? REDIS_PORT : '6379',
  AUTH: isProd ? REDIS_AUTH : '',
};

export const MOMENT = {
  HUMAN_TIME_FORMAT: 'MMMM Do YYYY, h:mm:ss a',
  SMITE_API_FORMAT: 'YYYYMMDDHHmmss',
};

export const PORTALS = {
  HIREZ: '1',
  STEAM: '5',
  PS4: '9',
  XBOX: '10',
  SWITCH: '22',
  DISCORD: '25',
  EPIC: '28',
  // reverse mapping
  1: 'HIREZ',
  5: 'STEAM',
  9: 'PS4',
  10: 'XBOX',
  22: 'SWITCH',
  25: 'DISCORD',
  28: 'EPIC',
};

export const REGEX = {
  // matches all words between encasing double underscore
  // '__dhko__' -> 'dhko'
  // '__a_b__' -> 'a_b'
  MATCH_BETWEEN_DOUBLE_UNDERSCRORE: /(?:__)(.*?)(?:__)/,
};
