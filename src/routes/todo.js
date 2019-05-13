import { Router } from 'express';
import TodoController from '../controllers/TodoController';

const route = Router();

export default (app) => {
  app.use('/todos', route);

  route.post('/', TodoController.addTodo);
};
