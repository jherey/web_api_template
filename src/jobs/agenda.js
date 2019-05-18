/* eslint-disable no-underscore-dangle */
import Agenda from 'agenda';
import dotenv from 'dotenv';

import logger from '../utils/logger';
import config from '../config';

dotenv.config();

const mongoConnectionString = config.db.dev;
const collection = config.agenda.dbCollection;

const agenda = new Agenda({
  db: { address: mongoConnectionString, collection },
});

require('.')(agenda);

agenda.on('ready', () => {
  (async () => {
    try {
      agenda._collection.ensureIndex({
        disabled: 1,
        lockedAt: 1,
        name: 1,
        nextRunAt: 1,
        priority: -1,
      }, {
        name: 'findAndLockNextJobIndex',
      });
      logger.info('Agenda successfully indexed');
    } catch (err) {
      logger.error('Failed to create agendajs index!', err);
      throw err;
    }
  })();
  agenda.start();
});

/**
 * @description closes agenda
 * @returns {void}
 */
const gracefulExit = () => {
  agenda.stop(() => {
    process.exit(0);
  });
};

process.on('SIGTERM', gracefulExit);
process.on('SIGINT', gracefulExit);

module.exports = agenda;
