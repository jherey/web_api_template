import { Router } from 'express';
import todo from './todo';

const app = Router();

todo(app);

export default app;
