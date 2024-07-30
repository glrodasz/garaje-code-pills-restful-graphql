import { Request, Response } from "express";
import { Task } from "../entities/Task";
import { TaskRepository } from "../repositories/taskRepository";

const taskRepository = // TODO

export const getAllTasks = (req: Request, res: Response): Response<Task[]> => {
  // TODO
};

export const getTaskById = (req: Request, res: Response): Response<Task> => {
  // TODO
};

export const createTask = (req: Request, res: Response): Response<Task> => {
  // TODO
};
