import axios from 'axios';
import _ from 'lodash';
import md5 from 'md5';
import moment from 'moment';
import utf8 from 'utf8';

import CONSTANTS from '../constants';
import HELPERS from '../helpers';

// extend axios timeout on real Smite API requests
// in case Smite API is unresponsive
axios.defaults.timeout = 30000;

const { API, METHODS, LANGS } = CONSTANTS;
const { BASE_URL, SESSION_ID } = API;

const { DEV_ID, AUTH_KEY } = API;

export class BaseSmiteClient {
  constructor(lang = LANGS.ENGLISH) {
    this.lang = lang;
    this.session_id = null;
    this.dev_id = DEV_ID;
    this.auth_key = AUTH_KEY;
  }

  /**
   * throws error if these values do not exist in .env:
   *   * DEV_ID
   *   * AUTH_KEY
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
    let url = `${BASE_URL}/${method}/${this.dev_id}/${signature}${session}/${timestamp}`;

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
    const parsedMethod = HELPERS.parseMethod(method);
    const signature = this._generateSignature(parsedMethod);
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

  /**
   * creates a session
   * @public
   * @returns {void}
   */
  async createSession() {
    const url = this._generateEndpoint(METHODS.CREATE_SESSION_JSON);
    return await this._processRequest(url);
  }

  /**
   * returns data used for a developer account
   * @returns {Array<Object>} - data
   */
  async getDataUsed() {
    const response = await this._performRequest(METHODS.GET_DATA_USED_JSON);
    return response;
  }

  /**
   * @public
   * @param {String} matchId - match id like '1229914631'
   * @returns {Array<Object>} - match details
   */
  async getMatchDetails(matchId) {
    const response = await this._performRequest(METHODS.GET_MATCH_DETAILS_JSON, matchId);
    return response;
  }

  /**
   * @public
   * @param {String} accountName - account name for player, like 'dhko'
   * @returns {Array<Object>} - data of last 50 matches
   */
  async getMatchHistory(accountName) {
    const response = await this._performRequest(METHODS.GET_MATCH_HISTORY_JSON, accountName);
    return response;
  }

  /**
   * @public
   * @param {String} accountName - account name for player, like 'dhko'
   * @returns {Object} - data
   */
  async getPlayer(accountName) {
    const response = await this._performRequest(METHODS.GET_PLAYER_JSON, accountName);
    return response;
  }

  async ping() {
    const url = `${BASE_URL}/${METHODS.PING_JSON}`;
    const response = await this._processRequest(url);
    return response;
  }

  /**
   * tests if createsession was successful
   * @public
   * @returns {void | Error} - error
   */
  async testSession() {
    this._assertEnvVariables();

    try {
      await this._performRequest(METHODS.TEST_SESSION_JSON);
    } catch (error) {
      return new Error('Test Session Failed!');
    }
  }
}

const client = new BaseSmiteClient();

export default client;
