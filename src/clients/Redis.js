import { createClient } from 'redis';

const onError = (err) => {
  console.error(`Redis Client Error: ${err}`);
};

const redisClient = createClient();
redisClient.on('error', onError);

(async () => {
  await redisClient.connect();
})();

export { redisClient };
