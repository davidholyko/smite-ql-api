import SmiteClient from './clients/SmiteClient';

export const makeServer = async () => {
  await SmiteClient.createSession();
  console.log('Server started!');
};
