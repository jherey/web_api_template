import TodoRepository from '../data/repositories/TodoRepository';

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

      return newTodo;
    } catch (error) {
      throw error;
    }
  }
}
