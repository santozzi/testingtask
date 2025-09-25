import { Request, Response } from "express";
import TasksService from "../services/tasks.service";
import {Task} from "./../models/task"
class TasksController {
  public getTask(req: Request, res: Response) {
    const id = req.params.id;
    if (!id) {
      res.status(402).json({
        message: "id no definido",
      });
    } else {
      try {
        const task = TasksService.getTask(id);
      } catch (error) {
        if (error instanceof Error)
          res.status(404).json({
            message: error.message,
          });
      }
    }
  }
  public getTasks(req: Request, res: Response){
    const tareas = TasksService.getTasks();
    res.status(200).json(tareas);
  }
  public addTask (req: Request, res: Response){
    const {tarea,cumplida} = req.body
    const nuevaTarea = TasksService.addTask(new Task(tarea,cumplida));
    res.status(202).json(nuevaTarea);
  }
}
export default new TasksController();
