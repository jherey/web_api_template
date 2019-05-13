import TodoService from '../services/TodoService';

/**
 * @description TodosController
 */
class TodosController {
  /**
   *@description Creates a new todo
   *@param  {Object} req - Request sent to the router
   *@param  {object} res - Response sent from the controller
   *@returns {object} - status code, message and the new todo
   *@memberof ContactController
   */
  static async addTodo(req, res) {
    try {
      const newTodo = await TodoService.saveTodo(req.body);
      return res.status(201).json({ message: 'New todo created', newTodo });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default TodosController;
