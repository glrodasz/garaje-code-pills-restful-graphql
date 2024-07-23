import { Task } from "../generated/graphql";
import * as data from "../data.json";

export class TaskRepository {
  private tasks: Task[] = data.tasks;

  getAll(): Task[] {
    return this.tasks;
  }

  getById(id: number): Task | undefined {
    return this.tasks.find((task) => task.id === id);
  }

  create(task: Omit<Task, "id">): Task {
    const newTask = { ...task, id: this.tasks.length + 1 };
    this.tasks.push(newTask);
    return newTask;
  }
}
