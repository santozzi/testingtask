import { Task } from "./../models/task";
import TaskServices from "./../services/tasks.service";
let tarea0:Task;
beforeAll(() => {
    tarea0 = new Task("tarea de prueba");
  
});
let id:string;
beforeEach(async()=>{
    const tarea2 = new Task("tarea dummy");
    const nuevaTarea = await TaskServices.addTask(tarea2)
    id = nuevaTarea.getId();
})

describe("servicios de las task", () => {
  test("Ver tareas de la bd", async () => {
    const tareas = await TaskServices.getTasks();

    expect(tareas.length).toBe(1);
  });
  
  test("agregar una tarea", async () => {
    const tareaAgregada = await TaskServices.addTask(tarea0);
    const tareas = await TaskServices.getTasks();
    expect(tareas.length).toBe(2);
  });

  test("getTest",async ()=>{
    const id = tarea0.getId();
    const tareaEncontrada = await TaskServices.getTask(id);
    expect(tareaEncontrada).toEqual(tarea0)
  })
  test("editar TaskName",async()=>{
   const tareaTxt = "Ragar las plantas";
   await  TaskServices.editTaskName(id,tareaTxt)
   const tareaEditada = await TaskServices.getTask(id);
   expect(tareaEditada.getTarea()).toBe(tareaTxt);
  })


});

afterEach(()=>{
      TaskServices.deleteTask(id)
})

describe("pruebas de la clase Task", () => {
  //preparar lo que necesito
  //Arrange
  const tarea1 = new Task("Ir a correr");
  //actuar
  //Act
  tarea1.setCumplido(true);
  //probar la hipotesis
  //Assert
  //el patron de AAA
  test("Cuando realizao la tearea debe dar true", () => {
    expect(tarea1.isCumplido()).toBe(true);
  });
});
