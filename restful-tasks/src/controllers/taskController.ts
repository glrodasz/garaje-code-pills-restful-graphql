import { Request, Response } from 'express';
import { Task } from '../entities/Task';
import { TaskRepository } from '../repositories/taskRepository';

const taskRepository = new TaskRepository();

export const getAllTasks = (req: Request, res: Response): Response<Task[]> => {
  const tasks = taskRepository.getAll();
  return res.json(tasks);
};

export const getTaskById = (req: Request, res: Response): Response<Task> => {
  const task = taskRepository.getById(Number(req.params.id));
  if (task) {
    return res.json(task);
  } else {
    return res.status(404).send('Task not found');
  }
};

export const createTask = (req: Request, res: Response): Response<Task> => {
  const newTask = taskRepository.create(req.body);
  return res.status(201).json(newTask);
};
