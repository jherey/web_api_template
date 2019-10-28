import express from 'express';

import loaders from '../loaders';
import logger from '../utils/logger';
import config from '../config';
import TodoQueue from '../lib/queues/newTodo';

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
    // when you're using class methods
    new TodoQueue().listen();
    // wehen you're using static methods
    newTodo.listen();
    newTodo.listen();
    newTodo.listen();
  } catch (err) {
    logger.error(err);
    newTodo.stop();
    newTodo.stop();
    newTodo.stop();
    process.exit(1);
  }
}

startServer();
