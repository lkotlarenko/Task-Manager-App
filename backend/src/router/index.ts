import { Router } from 'express';
import taskController from '../controllers/taskController';
import taskValidator from '../middlewares/taskMiddleware';

const router = Router();

router.get('/tasks', taskController.getAll);
router.post('/create', taskValidator, taskController.newTask)

export default router;
