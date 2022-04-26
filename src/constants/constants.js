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
  GET_GODS: 'getgods',
  GET_GOD_ALT_ABILTIES: 'getgodaltabilities',
  GET_GOD_SKINS: 'getgodskins',
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
  SCHEMA_VERSIONS: 'schema_versions',
  CURRENT_SCHEMA: 'current_schema',
  PREVIOUS_SCEHMA: 'previous_schema',
  SCHEMA_VERSION: 'schema_version',
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
  CLIENT_NOT_READY: 'SmiteQL.redis is not ready. Call async function SmiteQL.ready()',
};

export const SERVER = {
  PORT: process.env.PORT,
};
