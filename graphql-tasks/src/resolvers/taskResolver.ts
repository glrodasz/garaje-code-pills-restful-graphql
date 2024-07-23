import { QueryResolvers } from "../generated/graphql";
import { TaskRepository } from "../repositories/taskRepository";

const taskRepository = new TaskRepository();

export const taskResolvers: QueryResolvers = {
  tasks: () => taskRepository.getAll(),
  task: (_, { id }) => {
    const task = taskRepository.getById(id);
    if (task) {
      return task;
    } else {
      throw new Error("Task not found");
    }
  },
};
