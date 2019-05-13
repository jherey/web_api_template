import BaseRepository from './BaseRepository';
import todoSchema from '../schemas/TodoSchema';

/**
 * @description BaseRepository
 * @class BaseRepository
 */
class TodoRepository extends BaseRepository {
  /**
   * TodoRepository constructor
   */
  constructor() {
    super('Todo', todoSchema);
  }
}

export default TodoRepository;
