import SmiteApiClient from './clients/SmiteApiClient';

export const makeServer = async () => {
  await SmiteApiClient.createSession();
  console.info('Server started!');
  return SmiteApiClient;
};
