
import { TaskCrud } from "../../interface/taskCrud.interface";
import { Task } from "../../task";


export class MockTask implements TaskCrud{
    protected tam:number
    protected container:Array<Task>;
    constructor(){
        this.tam = 0;
        this.container = new Array<Task>();
    }
    editTaskName(id: string, tarea: string): Task {
        const tareaEntontrada = this.container.find((tarea:Task)=>tarea.getId()===id);
        if(!tareaEntontrada){
            throw new Error("no esta la tarea");
        }
        tareaEntontrada.setTarea(tarea);
        return tareaEntontrada;
    }
    cumplirPostergar(id: string, cumplida: boolean): Task {
       const tareaEntontrada = this.container.find((tarea:Task)=>tarea.getId()===id);
        
        if(!tareaEntontrada){
            throw new Error("no esta la tarea");
        }
        if(tareaEntontrada.isCumplido()){
            tareaEntontrada.setCumplido(false);
        }else{
            tareaEntontrada.setCumplido(true);
        }

      
        return tareaEntontrada;
    }
    editTask(id: string, tarea: string, cumplida: boolean): Task {
        throw new Error("Method not implemented.");
    }
    size(): number {
        return this.tam;
    }
    getTasks(): Array<Task> {
        return this.container;
    }
    getTask(id: string): Task {
        const resultado =  this.container.find((task:Task)=>{
        return task.getId() === id;
        })
        if(resultado === undefined){
            throw new Error("no ta");
        }
        return resultado;
    }
    addTask(tarea: Task): void {
        tarea.setId((this.tam + 1)+"")
        this.container.push(tarea);
        this.tam++;
    }
    deleteTask(id: string): void {
        throw new Error("Method not implemented.");
    }
   
    
}
export default new MockTask();