import express from 'express';
import loaders from '../loaders';
import logger from '../utils/logger';
import config from '../config';

/**
 * Function to start server
 * @returns {void}
 */
async function startServer() {
  const app = express();

  await loaders({ expressApp: app });

  app.listen(config.port, (err) => {
    if (err) {
      logger.error(err);
      return;
    }
    logger.info(`Server is listening on port: ${config.port}!`);
  });
}

startServer();
