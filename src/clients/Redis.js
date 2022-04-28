import { createClient } from 'redis';

const isProd = process.env.NODE_ENV === 'production';
const REDIS_HOST = isProd ? process.env.REDIS_HOST : '127.0.0.1';
const REDIS_PORT = isProd ? process.env.REDIS_PORT : '6379';
const REDIS_AUTH = isProd ? process.env.REDIS_AUTH : '';
const url = `redis://${REDIS_AUTH}${REDIS_HOST}:${REDIS_PORT}`;

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
