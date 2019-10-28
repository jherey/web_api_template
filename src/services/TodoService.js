import TodoRepository from '../data/repositories/TodoRepository';
import agenda from '../jobs/agenda';
import TodoQueue from '../lib/queues/newTodo';

const todoRepository = new TodoRepository();

/**
 * @description TodoService
 */
export default class TodoService {
  /**
   *@description Creates a new todo
   *@param  {Object} todoData
   *@returns {object} - newly created todo
   *@memberof TodoService
   */
  static async saveTodo(todoData) {
    try {
      const newTodo = await todoRepository.create(todoData);

      // Schedule a task, in 1 minute send the welcome email to the user.
      // agenda.schedule('in 1 minute', 'todo-saved-email', { email: todoData.email });

      const queue = new TodoQueue();
      await queue.add({ email: todoData.email });
      return newTodo;
    } catch (error) {
      throw error;
    }
  }
}
