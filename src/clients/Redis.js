import { createClient } from 'redis';

const isProd = process.env.NODE_ENV === 'production';
const URL = isProd ? process.env.REDIS_URL : '127.0.0.1';
const PORT = isProd ? process.env.REDIS_PORT : '6379';
const url = `redis://${URL}:${PORT}`;

const onError = (err) => {
  console.error(`Redis Client Error: ${err}`);
};

const redisClient = createClient({ url });
redisClient.on('error', onError);

(async () => {
  await redisClient.connect();
})();

export { redisClient };
