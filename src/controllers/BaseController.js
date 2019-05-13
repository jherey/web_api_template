/* eslint-disable class-methods-use-this */
import DocumentNotFound from '../data/repositories/RepositoryErrors';

/**
 * @description BaseController
 */
export default class BaseController {
  /**
   *@param  {object} res
   *@param  {number} statusCode
   *@param  {string} message
   *@param  {object} data
   *@returns {object} - status code and error message
   */
  success(res, statusCode, message, data) {
    res.status(statusCode);
    return res.json({ message, ...data && { data } });
  }

  /**
   *@param  {object} res
   *@param  {object} error
   *@returns {object} - status code and error message
   */
  error(res, error) {
    let statusCode;
    const { message } = error;

    if (error instanceof DocumentNotFound) {
      statusCode = 404;
    }
    statusCode = 400;

    return res.status(statusCode).json({ message });
  }
}
