import appLoader from './app';
import mongooseLoader from './mongoose';
import logger from '../utils/logger';

export default async ({ expressApp }) => {
  const mongoConnection = await mongooseLoader();

  mongoConnection
    .on('connecting', () => logger.info('Connecting to database'))
    .on('connected', () => logger.info('Database connected!! 😎'))
    .on('disconnected', () => {
      logger.warn('Database disconnected, server will shortdown!');
      appLoader.close();
    })
    .on('error', error => logger.error(`Database error ${error.message}`));

  await appLoader({ app: expressApp });
};
