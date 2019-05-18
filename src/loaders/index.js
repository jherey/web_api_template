import Mongoose from 'mongoose';

import appLoader from './app';
import config from '../config';
import logger from '../utils/logger';
import mongooseLoader from './mongoose';

export default async ({ expressApp }) => {
  const connectionUrl = config.env === 'test'
    ? config.db.test : config.db.dev;

  Mongoose.connection
    .on('connecting', () => logger.info('Connecting to database'))
    .on('connected', () => logger.info('Database connected!! 😎'))
    .on('disconnected', () => {
      logger.warn('Database disconnected, server will shortdown!');
      appLoader.close();
    })
    .on('error', error => logger.error(`Database error ${error.message}`));

  await mongooseLoader(connectionUrl);

  await appLoader({ app: expressApp });
};
