import { makeApplication } from './app';
import { smiteQLClient } from './clients/SmiteQL';

(async () => {
  // guarantee that SmiteQL is ready before setting up endpoints
  // on production, the application will sleep when not in use
  // and SmiteQL needs to be ready before handling requests
  await smiteQLClient.ready();
  makeApplication();
})();
