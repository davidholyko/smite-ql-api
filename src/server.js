import express from 'express';

import { smiteQLClient } from './clients/SmiteQL';
import CONSTANTS from './constants';

const { SERVER } = CONSTANTS;

const app = express();

/**
 * @example http://localhost:4343/ping
 */
app.get('/ping', function (_req, res) {
  res.send({ message: 'pong' });
});

/**
 * @example http://localhost:4343/smite-ql?path=players.dhko.matches.1235652463
 */
app.get('/smite-ql', async function (req, res) {
  const { path } = req.query;

  if (!path) {
    return res.send({ message: 'query.params is required for "smite-ql" endpoint.' });
  }

  const response = await smiteQLClient._get(path);

  res.send(response);
});

app.listen(SERVER.PORT);

export { app };
