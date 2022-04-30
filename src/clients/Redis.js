import { createClient } from 'redis';

import CONSTANTS from '../constants';

const { REDIS } = CONSTANTS;
const { AUTH, HOST, PORT } = REDIS;

const url = `redis://${AUTH}${HOST}:${PORT}`;

const onError = (err) => {
  console.error(`Redis Client Error: ${err}`);
};

const redisClient = createClient({ url });
redisClient.on('error', onError);

(async () => {
  await redisClient.connect();
  console.info(`📖📖📖 Redis is connected at ${url} 📖📖📖`);
})();

export { redisClient };
