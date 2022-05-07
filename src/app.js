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
    res.send({
      // ping should always work as long as server is running
      success: true,
      message: 'pong',
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
        message: "query params 'path=' is required for '/smite-ql' endpoint.",
      });
    }

    if (path === '$') {
      return res.send({
        // if no path is sent, the entire redis DB will be the output JSON
        // we will want to reduce its scope
        success: false,
        message: "query params 'path=$' is restricted for '/smite-ql' endpoint.",
      });
    }

    if (path === 'players') {
      return res.send({
        success: false,
        message: "query params 'path=players' is restricted for '/smite-ql' endpoint.",
      });
    }

    if (path === 'global') {
      return res.send({
        success: false,
        message: "query params 'path=global' is restricted for '/smite-ql' endpoint.",
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
   * @example http://localhost:8080/history?player=dhko
   */
  app.get('/history', async function (req, res) {
    const { player, forceUpdate, limit, index } = req.query;

    if (!player) {
      return res.send({
        // if no path is sent, the entire redis DB will be the output JSON
        // we will want to reduce its scope
        success: false,
        message: 'query.params is required for "/history" endpoint.',
      });
    }

    if (forceUpdate === 'true') {
      try {
        await smiteClient.getMatchHistory(player);
      } catch (error) {
        return res.send({
          // on errors, send the entire stack trace and message
          success: false,
          message: `Player: ${player} does not exist.`,
          response: {
            error: true,
            message: error.message,
            stack: error.stack.split('\n'),
          },
        });
      }
    }

    // remove all undefined/null values from options
    const options = _.pickBy({ limit, index }, _.identity);
    const response = await smiteClient.getHistory(player, options);
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
    console.info(`✅✅✅ Listening on port: ${SERVER.PORT} ✅✅✅`);
  });
};
