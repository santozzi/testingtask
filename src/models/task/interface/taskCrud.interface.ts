import { Task } from "../task";

export interface TaskCrud<ID> {
    getTasks():Task<ID>;
    getTask(id:ID):Task<ID>;
    addTask(tarea:Task<ID>):void;
    deleteTask(id:ID):void;
    editTask(id:ID,tarea:string):Task<ID>
    editTask(id:ID,cumplida:boolean):Task<ID>
    editTask(id:ID,tarea:string, cumplida:boolean):Task<ID>
    size():number;
    

}