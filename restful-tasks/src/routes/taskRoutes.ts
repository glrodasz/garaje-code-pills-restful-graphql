import { Router } from 'express';
import { getAllTasks, getTaskById, createTask } from '../controllers/taskController';

const router = Router();

router.get('/tasks', getAllTasks);
router.get('/tasks/:id', getTaskById);
router.post('/tasks', createTask);

export default router;
