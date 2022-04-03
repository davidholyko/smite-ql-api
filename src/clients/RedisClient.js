import { createClient } from 'redis';

import globals from '../globals';

const client = createClient();

(async () => {
  // in unit tests, we do not want to connect to redis
  if (globals.isTestEnv) {
    return;
  }

  client.on('error', (err) => console.error('Redis Client Error', err));
  await client.connect();
})();

export default client;
