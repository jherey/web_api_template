import logger from '../../utils/logger';

/* eslint-disable require-jsdoc */
export async function onJobComplete(job) {
  const { id, attemptsMade } = job.toJSON();

  // log to console or
  console.log(`job with id: ${id} stalled after ${attemptsMade} attempts`);
}

export async function onJobStalled(job) {
  const { id, attemptsMade } = job.toJSON();

  // log to console
}

export async function onJobFailed(job, error) {
  const {
    id, attemptsMade, failedReason, stacktrace,
  } = job.toJSON();

  // log to console
}

export async function onQueueError(queueName, error) {
  logger.error(`${queueName} error: ${error.message}`, error);
  // Sentry.captureException(error);
}
