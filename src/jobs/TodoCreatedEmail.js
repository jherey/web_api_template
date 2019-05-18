import MailerService from '../utils/mailer';
import logger from '../utils/logger';

/**
 * @description TodoCreatedEmail
 */
export default class TodoCreatedEmail {
  /**
   *@description Job that calls email function
   *@param  {Object} job
   *@param  {boolean} done
   *@returns {void}
   */
  async handler(job, done) {
    logger.info('Email Sequence Job triggered!');
    try {
      const { email } = job.attrs.data;
      const mailerServiceInstance = new MailerService();
      await mailerServiceInstance.TodoCreatedEmail(email);
      done();
    } catch (error) {
      logger.error('Error with Email Sequence Job');
      done(error);
    }
  }
}
