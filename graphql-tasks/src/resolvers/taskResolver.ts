import { QueryResolvers } from "../generated/graphql";
import { TaskRepository } from "../repositories/taskRepository";

const taskRepository = // TODO

export const taskResolvers: QueryResolvers = {
  tasks: () => {
    // TODO
  },
  task: (_, { id }) => {
    // TODO
  },
};
