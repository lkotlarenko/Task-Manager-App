import { Router } from 'express';
import taskController from '../controllers/taskController';

const router = Router();

router.get('/tasks', taskController.getAll);

export default router;
