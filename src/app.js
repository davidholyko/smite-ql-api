import cors from 'cors';
import express from 'express';
import _ from 'lodash';

import { smiteClient } from './clients/SmiteQL';
import CONSTANTS from './constants';

const { SERVER } = CONSTANTS;

export const makeApplication = () => {
  const app = express();
  app.use(
    cors({
      origin: ['https://smite-ql.com', 'http://localhost:3000'],
    }),
  );

  /**
   * @example http://localhost:8080/ping
   */
  app.get('/ping', async function (_req, res) {
    let response;
    let success = true;

    try {
      response = await smiteClient.getDataUsed();
    } catch (error) {
      response = [{ status: 'Official Smite API is down.' }];
      success = false;
    }

    res.send({
      // ping should always work as long as server is running
      success,
      message: 'pong',
      response: {
        ..._.first(response),
      },
    });
  });

  /**
   * @example http://localhost:8080/smite-ql?path=players.dhko.matches.1235652463
   */
  app.get('/smite-ql', async function (req, res) {
    const { path } = req.query;

    if (!path) {
      return res.send({
        // if no path is sent, the entire redis DB will be the output JSON
        // we will want to reduce its scope
        success: false,
        message: "query.params.path is required for '/smite-ql' endpoint.",
      });
    }

    if (path === '$') {
      return res.send({
        // if no path is sent, the entire redis DB will be the output JSON
        // we will want to reduce its scope
        success: false,
        message: "path=$ is restricted for '/smite-ql' endpoint.",
      });
    }

    if (path === 'players') {
      return res.send({
        success: false,
        message: "path=players is restricted for '/smite-ql' endpoint.",
      });
    }

    if (path === 'global') {
      return res.send({
        success: false,
        message: "path=global is restricted for '/smite-ql' endpoint.",
      });
    }

    const response = await smiteClient.get(path);
    const success = response.error ? false : true;
    const message = response.error ? 'failure' : 'success';

    res.send({
      // on errors, send the entire stack trace and message
      success,
      message,
      response,
    });
  });

  /**
   * @example http://localhost:8080/smite-api?player=dhko
   * @example http://localhost:8080/smite-api?match=1243757001
   * @example http://localhost:8080/smite-api?history=dhko
   */
  app.get('/smite-api', async function (req, res) {
    const { match, player, history } = req.query;
    const queryParams = _.filter(req.query).length;

    if (queryParams > 1) {
      return res.send({
        success: false,
        message: "Only one of [match, player, history] is allowed for '/smite-api' endpoint.",
      });
    }

    if (queryParams === 0) {
      return res.send({
        success: false,
        message: "One of [match, player] is required for '/smite-api' endpoint.",
      });
    }

    if (match) {
      const response = await smiteClient.smiteApi.getMatchDetails(match);
      return res.send({
        success: true,
        message: `Match details found for ${match}`,
        response,
      });
    }

    if (player) {
      const response = await smiteClient.smiteApi.getPlayer(player);
      return res.send({
        success: true,
        message: `Player details found for ${player}`,
        response,
      });
    }

    if (history) {
      const response = await smiteClient.smiteApi.getMatchHistory(history);
      return res.send({
        success: true,
        message: `Player history found for ${history}`,
        response,
      });
    }

    return res.send({
      success: false,
      message: 'Something went wrong',
      response: {},
    });
  });

  /**
   * @example http://localhost:8080/history?player=dhko
   */
  app.get('/history', async function (req, res) {
    const { forceUpdate, limit, index, platform, map = '' } = req.query;
    // remove all undefined/null values from options
    const options = _.pickBy({ limit, index, map, platform, forceUpdate }, _.identity);
    const playerId = decodeURI(req.query.player);

    if (!req.query.player) {
      return res.send({
        // if no path is sent, the entire redis DB will be the output JSON
        // we will want to reduce its scope
        success: false,
        message: "query.params.player is required for '/history' endpoint.",
      });
    }

    if (forceUpdate === 'true') {
      try {
        await smiteClient.getMatchHistory(playerId, options);
      } catch (error) {
        return res.send({
          // on errors, send the entire stack trace and message
          success: false,
          message: `Player: ${playerId} does not exist.`,
          response: {
            error: true,
            message: error.message,
            stack: error.stack.split('\n'),
          },
        });
      }
    }

    const response = await smiteClient.getHistory(playerId, options);
    const success = response.error ? false : true;
    const message = response.error ? 'failure' : 'success';

    res.send({
      // on errors, send the entire stack trace and message
      success,
      message,
      response,
    });
  });

  /**
   * @example http://localhost:8080/regen?player=dhko
   */
  app.get('/regen', async function (req, res) {
    const player = decodeURI(req.query.player);

    if (!req.query.player) {
      return res.send({
        // if no path is sent, the entire redis DB will be the output JSON
        // we will want to reduce its scope
        success: false,
        message: "query.params.player is required for '/regen' endpoint.",
      });
    }

    const response = await smiteClient.regenerateMatches(player);
    const success = response.error ? false : true;
    const message = response.error ? 'failure' : 'success';

    res.send({
      // on errors, send the entire stack trace and message
      success,
      message,
      response,
    });
  });

  app.listen(SERVER.PORT, () => {
    console.info(`????????? APP_3: Listening on port: ${SERVER.PORT} ?????????`);
  });
};
