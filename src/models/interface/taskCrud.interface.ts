import { Task } from "../task";

export interface TaskCrud {
    getTasks():Array<Task>;
    getTask(id:string):Task;
    addTask(tarea:Task):void;
    deleteTask(id:string):void;
    editTaskName(id:string,tarea:string):Task
    cumplirPostergar(id:string,cumplida:boolean):Task
    editTask(id:string,tarea:string, cumplida:boolean):Task
    size():number;
    

}