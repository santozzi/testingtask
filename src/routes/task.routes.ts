import {Router} from 'express';
import TaskController from './../controllers/tasks.controller';

const taskRoute = Router();


taskRoute.get("/:id",TaskController.getTask)
taskRoute.get("/",TaskController.getTasks)


taskRoute.post("/",TaskController.addTask)

taskRoute.delete("/:id",TaskController.deleteTask)
taskRoute.put("/:id",TaskController.editTask)
taskRoute.patch("/:id",TaskController.cumplirPostergar)


export default taskRoute;