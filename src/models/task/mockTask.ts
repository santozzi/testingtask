import { T } from "vitest/dist/chunks/environment.d.cL3nLXbE.js";
import { TaskCrud } from "./interface/taskCrud.interface";
import { Task } from "./task";


export class MockTask implements TaskCrud<number>{
    protected tam:number
    protected container:Array<Task<number>>;
    constructor(){
        this.tam = 0;
        this.container = new Array<Task<number>>();
    }
    size(): number {
        return this.tam;
    }
    getTasks(): Task<number> {
        throw new Error("Method not implemented.");
    }
    getTask(id: number): Task<number> {
        const resultado =  this.container.find((task:Task<number>)=>{
            return task.getId() === id;
        })
        if(resultado === undefined){
            throw new Error("no ta");
        }
        return resultado;
    }
    addTask(tarea: Task<number>): void {
        this.container.push(tarea);
        this.tam++;
    }
    deleteTask(id: number): void {
        throw new Error("Method not implemented.");
    }
    editTask(id: number, tarea: string): Task<number>;
    editTask(id: number, cumplida: boolean): Task<number>;
    editTask(id: number, tarea: string, cumplida: boolean): Task<number>;
    editTask(id: unknown, tarea: unknown, cumplida?: unknown): import("./task").Task<number> {
        throw new Error("Method not implemented.");
    }
    
}