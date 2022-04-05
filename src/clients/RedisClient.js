import { createClient } from 'redis';

const client = createClient();

(async () => {
  client.on('error', (err) => console.error('Redis Client Error', err));
  await client.connect();
})();

export default client;
