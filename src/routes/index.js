import { Router } from 'express';
import todo from './todo';

const app = Router();

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Api Template!' });
});

todo(app);

export default app;
