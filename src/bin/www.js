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

  try {
    await loaders({ expressApp: app });

    app.listen(config.port, () => {
      logger.info(`Server is listening on port: ${config.port}!`);
    });
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
}

startServer();
