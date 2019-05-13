import { Router } from 'express';
import TodosController from '../controllers/TodosController';

const route = Router();
const todosController = new TodosController();

export default (app) => {
  app.use('/todos', route);

  route.post('/', todosController.addTodo);
};
