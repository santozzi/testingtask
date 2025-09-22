
import {test,expect,describe} from 'vitest';
import { Task } from '../models/task/task';
import { TaskCrud } from '../models/task/interface/taskCrud.interface';
import { MockTask } from '../models/task/mockTask';

describe("prueba de taskCrud",()=>{
    const id = 1;
    const task:Task<number> = new Task<number>(id,"ir al super",false);
    const crud:TaskCrud<number> = new MockTask();
    crud.addTask(task);
    test("addTask",()=>{
        
        expect(crud.size()).toBe(1);
    })

    test("getTask",()=>{
        const task =  crud.getTask(id);
        expect(task.getId()).equals(1);
        expect(task.getTarea()).equals("ir al super")
        
    })
    
})