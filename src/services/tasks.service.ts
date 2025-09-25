import { TaskCrud } from "../models/interface/taskCrud.interface";
import { Task } from "../models/task";
import TaskModel from './../models/implementations/mockTask/mockTask'

class TaskService implements TaskCrud{
    getTasks(): Array<Task> {
        return TaskModel.getTasks();
    }
    getTask(id: string): Task {
        return TaskModel.getTask(id);
    }
    addTask(tarea: Task): void {
       TaskModel.addTask(tarea);
    }
    deleteTask(id: string): void {
        TaskModel.deleteTask(id);
    }
    editTaskName(id: string, tarea: string): Task {
       return TaskModel.editTaskName(id,tarea);
    }
    cumplirPostergar(id: string, cumplida: boolean): Task {
        return TaskModel.cumplirPostergar(id,cumplida);
    }
    editTask(id: string, tarea: string, cumplida: boolean): Task {
       return TaskModel.editTask(id,tarea,cumplida);
    }
    size(): number {
        return TaskModel.size();
    }

}
export default new TaskService();