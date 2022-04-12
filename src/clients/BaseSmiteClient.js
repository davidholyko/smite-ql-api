/**
 * @file
 * Based on endpoints from:
 * https://docs.google.com/document/d/1OFS-3ocSx-1Rvg4afAnEHlT3917MAK_6eJTR6rzr-BM/edit#
 */

import axios from 'axios';
import _ from 'lodash';
import md5 from 'md5';
import moment from 'moment';
import utf8 from 'utf8';

import CONSTANTS from '../constants';

// extend axios timeout on real Smite API requests
// in case Smite API is unresponsive
axios.defaults.timeout = 30000;

const { API, LANGS, METHODS } = CONSTANTS;
const { BASE_URL, SESSION_ID, DEV_ID, AUTH_KEY, JSON } = API;

export class BaseSmiteClient {
  constructor({
    // options
    auth_key = AUTH_KEY,
    dev_id = DEV_ID,
    lang = LANGS.ENGLISH,
    responseType = JSON,
  } = {}) {
    // session_id will be set once createSession is invoked
    this.session_id = null;

    this.auth_key = auth_key;
    this.dev_id = dev_id;
    this.lang = lang;
    this.responseType = responseType;
  }

  /**
   * throws error if these values do not exist in .env:
   * - DEV_ID
   * - AUTH_KEY
   * @returns {void}
   */
  _assertEnvVariables() {
    const errors = [];

    if (!this.dev_id) {
      errors.push('DEV_ID cannot be undefined. Please update top level .env file.');
    }

    if (!this.auth_key) {
      errors.push('AUTH_KEY cannot be undefined. Please update top level .env file.');
    }

    if (_.size(errors)) {
      throw new Error(errors.join(' '));
    }
  }

  /**
   * creates a request url
   * @private
   * @param {String} method - type of method
   * @param {String} signature - signature
   * @param {String} timestamp - timestamp
   * @param {...String} args - extra args
   * @returns {String} - url
   */
  _composeUrl(method, signature, timestamp, ...args) {
    const session = this.session_id ? `/${this.session_id}` : '';
    let url = `${BASE_URL}/${method}${this.responseType}/${this.dev_id}/${signature}${session}/${timestamp}`;

    _.forEach([...args], (arg) => {
      url += `/${arg}`;
    });

    return url;
  }

  /**
   * generates a timestamp like '20220328080808'
   * format of                  'yyyyMMDDHHmmss'
   *                             2022 -> year
   *                                 03 -> month (March)
   *                                   28 -> day (March 28th)
   *                                     08 -> hour (8am)
   *                                       08 -> minute (8:08am)
   *                                         08 -> second (8:08:08am)
   * @private
   * @returns {String} timestamp
   */
  _generateTimeStamp() {
    const timestamp = moment.utc().format(API.TIME_FORMAT);
    return timestamp;
  }

  /**
   * @private
   * @param {String} method - type of method
   * @returns {void}
   */
  _generateSignature(method) {
    const timestamp = this._generateTimeStamp();
    const text = this.dev_id + method + this.auth_key + timestamp;
    const encodedText = utf8.encode(text);
    const signature = md5(encodedText);
    return signature;
  }

  /**
   * @private
   * @param {String} method - method - like 'createsession' or 'createsessionJson'
   * @param {...String} args - extra args
   * @returns {String} - url
   */
  _generateEndpoint(method, ...args) {
    const signature = this._generateSignature(method);
    const timestamp = this._generateTimeStamp();
    const url = this._composeUrl(method, signature, timestamp, ...args);
    return url;
  }

  /**
   * @public
   * @param {String} method - method
   * @param {...String} args - extra args
   * @returns {Object} - data
   */
  async _performRequest(method, ...args) {
    if (_.isEmpty(this.session_id)) {
      await this.createSession();
    }

    const url = this._generateEndpoint(method, ...args);
    const data = await this._processRequest(url);
    return data;
  }

  /**
   * @private
   * @param {String} url - url
   * @returns {Object} - data
   */
  async _processRequest(url) {
    const response = await axios({ method: 'get', url });
    const { data } = response;

    // This might not belong here. sets up
    // session id if we are making createsession request
    if (_.get(data, SESSION_ID)) {
      this.session_id = data.session_id;
    }

    return data;
  }

  // * *********************************************************************************** * //
  // * relates to 'APIs - Connectivity, Development, & System Status' section in Smite API * //
  // * *********************************************************************************** * //

  /**
   * /ping[ResponseFormat]
   * A quick way of validating access to the Hi-Rez API.
   * @returns {String} response
   */
  async ping() {
    const url = `${BASE_URL}/${METHODS.PING}${this.responseType}`;
    const response = await this._processRequest(url);
    return response;
  }

  /**
   * /createsession[ResponseFormat]/{developerId}/{signature}/{timestamp}
   * A required step to Authenticate the developerId/signature for further API use.
   * @public
   * @returns {void}
   */
  async createSession() {
    const url = this._generateEndpoint(METHODS.CREATE_SESSION);
    return await this._processRequest(url);
  }

  /**
   * /testsession[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}
   * A means of validating that a session is established.
   * @public
   * @returns {void | Error} - error
   */
  async testSession() {
    this._assertEnvVariables();

    try {
      await this._performRequest(METHODS.TEST_SESSION);
    } catch (error) {
      return new Error('Test Session Failed!');
    }
  }

  /**
   * /getdataused[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}
   * Returns API Developer daily usage limits and the current status against those limits.
   * @returns {Array<Object>} - data
   */
  async getDataUsed() {
    const response = await this._performRequest(METHODS.GET_DATA_USED);
    return response;
  }

  /**
   * /gethirezserverstatus[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}
   * Function returns UP/DOWN status for the primary game/platform environments.
   * // Data is cached once a minute.
   * @public
   * @returns {Object} - data
   */
  async getHirezServerStatus() {
    const response = await this._performRequest(METHODS.GET_HIREZ_SERVER_STATUS);
    return response;
  }

  /**
   * @public
   * @returns {Object} - data
   */
  async getPatchInfo() {
    const response = await this._performRequest(METHODS.GET_PATCH_INFO);
    return response;
  }

  // * ************************************************************************** * //
  // * relates to relates to 'APIs - Gods/Champions & Items' section in Smite API * //
  // * ************************************************************************** * //

  // /getgods[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}/{languageCode}
  // Returns all Gods and their various attributes.

  // /getchampions[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}/{languageCode}
  // Returns all Champions and their various attributes. [PaladinsAPI only]

  // /getchampioncards[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}/{championId}/{languageCode}
  // Returns all Champion cards. [PaladinsAPI only]

  // /getgodleaderboard[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}/{godId}/{queue}
  // Returns the current season’s leaderboard for a god/queue combination.
  // [SmiteAPI; only queues 440, 450, 451]

  // /getchampionleaderboard[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}/{championId}/{queue}
  // Returns the current season’s leaderboard for a champion/queue combination.
  // [PaladinsAPI; only queue 428]

  // /getgodaltabilities[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}
  // Returns alt abilities for all gods.
  //  [SmiteAPI only]

  // /getgodskins[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}/{godId}/{languageCode}
  // Returns all available skins for a particular God.

  // /getchampionskins[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}/{championId}/{languageCode}
  // Returns all available skins for a particular Champion. Use “-1” as {championId} to get data for all champions. [PaladinsAPI only]
  // /getgodrecommendeditems[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}/{godid}/{languageCode}
  // Returns the Recommended Items for a particular God.
  // [SmiteAPI only]

  // /getchampionecommendeditems[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}/{championId}/{languageCode}
  // Returns the Recommended Items for a particular Champion. [PaladinsAPI only; Osbsolete - no data returned]

  /**
   * /getitems[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}/{languagecode}
   * Returns all Items and their various attributes on the current patch
   * @returns {Array<Object>} - data
   */
  async getItems() {
    const response = await this._performRequest(METHODS.GET_ITEMS, this.lang);
    return response;
  }

  // /getbountyitems[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}
  // Returns daily Bounty Item history for the past 6 months.
  // [PaladinsAPI only]

  // * ****************************************************************** * //
  // * relates to 'APIs - Leagues, Seasons & Rounds' section in Smite API * //
  // * ****************************************************************** * //

  // get leagueleaderboard[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}/{queue}/{tier}/{round}
  // Returns the top players for a particular league (as indicated by the queue/tier/round parameters).
  // Note: the “Season” for which the Round is associated is by default the current/active Season.

  // /getleagueseasons[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}/{queue}
  // Provides a list of seasons and rounds (including the single active season) for a match queue.

  // * *************************************************** *//
  // * relates to 'APIs - Match Info' section in Smite API *//
  // * *************************************************** *//

  // /getdemodetails[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}/{match_id}
  // Returns information regarding a particular match.
  // Rarely used in lieu of getmatchdetails().

  /**
   * /getmatchdetails[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}/{match_id}
   * Returns the statistics for a particular completed match.
   *
   * if a match if very old (more than ~50 games ago), the match might not actually
   * be available in the Smite API anymore
   * @public
   * @param {String} matchId - match id like '1229914631'
   * @returns {Array<Object>} - match details
   */
  async getMatchDetails(matchId) {
    const response = await this._performRequest(METHODS.GET_MATCH_DETAILS, matchId);
    return response;
  }

  // /getmatchdetailsbatch[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}/{match_id,match_id,match_id,...match_id}
  // Returns the statistics for a particular set of completed matches.
  // NOTE:  There is a byte limit to the amount of data returned; please limit the CSV parameter to 5 to 10 matches because of this and for Hi-Rez DB Performance reasons.

  // /getmatchidsbyqueue[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}/{queue}/
  // {date}/{hour}
  // Lists all Match IDs for a particular Match Queue; useful for API developers interested in constructing data by Queue.
  // To limit the data returned, an {hour} parameter was added (valid values: 0 - 23).
  // An {hour} parameter of -1 represents the entire day, but be warned that this may be more data than we can return for certain queues.
  // Also, a returned “active_flag” means that there is no match information/stats for the corresponding match.
  // Usually due to a match being in-progress, though there could be other reasons.
  // NOTE - To avoid HTTP timeouts in the GetMatchIdsByQueue() method, you can now specify a 10-minute window within the specified {hour} field to lessen the size of data returned by appending a “,mm” value to the end of {hour}. For example, to get the match Ids for the first 10 minutes of hour 3, you would specify {hour} as “3,00”.
  // This would only return the Ids between the time 3:00 to 3:09.
  // Rules below:
  // Only valid values for mm are “00”, “10”, “20”, “30”, “40”, “50”
  // To get the entire third hour worth of Match Ids, call GetMatchIdsByQueue() 6 times, specifying the following values for {hour}: “3,00”, “3,10”, “3,20”, “3,30”, “3,40”, “3,50”.
  // The standard, full hour format of {hour} = “hh” is still supported.

  // /getmatchplayerdetails[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}/{match_id}
  // Returns player information for a live match.

  // /gettopmatches[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}
  // Lists the 50 most watched / most recent recorded matches.

  // * ********************************************** * //
  // * relates to 'APIs - Other' section in Smite API * //
  // * ********************************************** * //

  // /getesportsproleaguedetails[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}
  // Returns the matchup information for each matchup for the current eSports Pro League season.
  // An important return value is “match_status” which represents a match being scheduled (1), in-progress (2), or complete (3)

  // /getmotd[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}
  // Returns information about the 20 most recent Match-of-the-Days.

  // * ****************************************************** * //
  // * relates to 'APIs - PlayerId Info' section in Smite API * //
  // * ****************************************************** * //

  // /getfriends[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}/{playerId}
  // Returns the Smite User names of each of the player’s friends.
  // [PC only]

  // /getgodranks[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}/{playerId}
  // Returns the Rank and Worshippers value for each God a player has played.

  // /getchampionranks[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}/{playerId}
  // Returns the Rank and Worshippers value for each Champion a player has played. [PaladinsAPI only]

  // /getplayerloadouts[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}/playerId}/{languageCode}
  // Returns deck loadouts per Champion. [PaladinsAPI only]

  // /getplayerachievements[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}/{playerId}
  // Returns select achievement totals (Double kills, Tower Kills, First Bloods, etc) for the specified playerId.
  // [SMITEAPI only]

  // /getplayerstatus[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}/{playerId}
  // Returns player status as follows:

  // 0 - Offline
  // 1 - In Lobby  (basically anywhere except god selection or in game)
  // 2 - god Selection (player has accepted match and is selecting god before start of game)
  //      	3 - In Game (match has started)
  //      	4 - Online (player is logged in, but may be blocking broadcast of player state)
  // 	5 - Unknown (player not found)

  /**
   * /getmatchhistory[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}/{playerId}
   * Gets recent matches and high level match statistics for a particular player
   * @public
   * @param {String} accountName - account name for player, like 'dhko'
   * @returns {Array<Object>} - data of last 50 matches
   */
  async getMatchHistory(accountName) {
    const response = await this._performRequest(METHODS.GET_MATCH_HISTORY, accountName);
    return response;
  }

  // /getqueuestats[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}/{playerId}/{queue}
  // Returns match summary statistics for a (player, queue) combination grouped by gods played.

  // /searchplayers[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}/{searchPlayer}
  // Returns player_id values for all names and/or gamer_tags containing the “searchPlayer” string.

  // * ************************************************************ * //
  // * relates to 'APIs - Players & PlayerIds' section in Smite API * //
  // * ************************************************************ * //

  /**
   * /getplayer[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}/{player}
   * Returns league and other high level data for a particular player.
   * @public
   * @param {String} accountName - account name for player, like 'dhko'
   * @returns {Object} - data
   */
  async getPlayer(accountName) {
    const response = await this._performRequest(METHODS.GET_PLAYER, accountName);
    return response;
  }

  // /getplayerbatch[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}/{playerId,playerId,playerId,...playerId}
  // Returns league and other high level data for a particular CSV set of up to 20 playerIds.
  // [PaladinsAPI only]

  // /getplayeridbyname[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}/{playerName}
  // Function returns a list of Hi-Rez playerId values (expected list size = 1) for playerName provided.
  // The playerId returned is expected to be used in various other endpoints to represent the player/individual regardless of platform.

  // /getplayeridbyportaluserid[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}/{portalId}/{portalUserId}
  // Function returns a list of Hi-Rez playerId values (expected list size = 1) for {portalId}/{portalUserId} combination provided.
  // The playerId returned is expected to be used in various other endpoints to represent the player/individual regardless of platform.

  // /getplayeridsbygamertag[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}/{portalId}/{gamerTag}
  // Function returns a list of Hi-Rez playerId values for {portalId}/{portalUserId} combination provided.
  // The appropriate playerId extracted from this list by the API end user is expected to be used in various other endpoints to represent the player/individual regardless of platform.

  // /getplayeridinfoforxboxandswitch[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}/{playerName}
  // Meaningful only for the Paladins Xbox API.
  // Paladins Xbox data and Paladins Switch data is stored in the same DB.
  // Therefore a Paladins Gamer Tag value could be the same as a Paladins Switch Gamer Tag value.
  // Additionally, there could be multiple identical Paladins Switch Gamer Tag values.
  // The purpose of this method is to return all Player ID data associated with the playerName (gamer tag) parameter.
  // The expectation is that the unique player_id returned could then be used in subsequent method calls.
  // [PaladinsAPI only]

  // * *************************************************** * //
  // * relates to 'APIs - Team Info' section in Smite API * //
  // * ************************************************** * //

  // /getteamdetails[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}/{clanid}
  // Lists the number of players and other high level details for a particular clan.

  // /getteammatchhistory[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}/{clanid}
  // Gets recent matches and high level match statistics for a particular clan/team.
  // *DEPRECATED* - As of 2.14 Patch, /getteammatchhistory is no longer supported and will return a NULL dataset.

  // /getteamplayers[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}/{clanid}
  // Lists the players for a particular clan.

  // /searchteams[ResponseFormat]/{developerId}/{signature}/{session}/{timestamp}/{searchTeam}
  // Returns high level information for Clan names containing the “searchTeam” string.
  // [SmiteAPI only]
}

const client = new BaseSmiteClient();

export default client;