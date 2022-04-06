import { createClient } from 'redis';

const onError = (err) => {
  console.error(`Redis Client Error: ${err}`);
};

const client = createClient();
client.on('error', onError);

(async () => {
  await client.connect();
})();

export default client;
