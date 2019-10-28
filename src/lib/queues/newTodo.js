import Queue from 'bull';
import config from '../../config';
import newTodo from '../tasks/newTodo';
import {
  onJobComplete, onJobFailed, onJobStalled, onQueueError,
} from '../helpers/jobLogger';

const name = 'newTodo';

const backoffStrategies = {
  jitter: (attemptsMade, err) => config.jobConfig.retry_delay + Math.random() * 500,
};

const backofType = config.env !== 'production' ? 'fixed' : 'jitter';

/**
 * @description BaseRepository
 * @class BaseRepository
 */
class Bull {
  /**
   * constructor
   */
  constructor() {
    this.queue = new Queue(name, {
      redis: config.redis,
      settings: {
        backoffStrategies: {
          jitter: backoffStrategies.jitter,
        },
      },
      defaultJobOptions: {
        attempts: config.jobConfig.retryLimit || 5, // The total number of attempts to try the job until it completes.
        backoff: {
          type: backofType,
          ...(backofType === 'fixed') && { delay: config.jobConfig.retryDelay },
        },
        repeat: {
          cron: '',
        },
      },
    });
  }

  /**
   * @returns {void}
   */
  static listen() {
    this.queue.on('completed', onJobComplete);
    // this.queue.on('failed', (job, error) => onJobFailed(job, error));
    this.queue.on('failed', onJobFailed);
    this.queue.on('stalled', onJobStalled);
    this.queue.on('error', error => onQueueError(name, error));

    this.queue.process(newTodo);
    this.queue.process((job, done) => {});
  }

  /**
   * @returns {void}
   */
  static stop() {
    this.queue.close();
  }
}

export default Bull;
