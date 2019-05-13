import BaseController from './BaseController';
import TodoService from '../services/TodoService';

/**
 * @description TodosController
 */
class TodosController extends BaseController {
  /**
   *@description Creates a new todo
   *@param  {Object} req - Request sent to the router
   *@param  {object} res - Response sent from the controller
   *@returns {object} - status code, message and the new todo
   *@memberof ContactController
   */
  async addTodo(req, res) {
    try {
      const newTodo = await TodoService.saveTodo(req.body);
      const message = 'New todo created';
      return super.success(res, 201, message, newTodo);
    } catch (error) {
      return super.error(res, error);
    }
  }
}

export default TodosController;
