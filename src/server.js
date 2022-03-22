import SmiteClient from './clients/SmiteClient';

export const makeServer = async () => {
  await SmiteClient.testSession();
  console.log('Server started!');
};
