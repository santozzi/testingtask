import { Application } from 'express';
import Server from '../app';
import request from 'supertest';
import { getMultipleTask, getOneTask } from './fake/tareas.fake';
import TaskModel from './../models/implementations/mockTask/mockTask';

const hola = 'hola mundo!!';
let app: Application;
let server: Server;
jest.mock('./../models/implementations/mockTask/mockTask', () => ({
  getTasks: jest.fn(),
}));
const mockedTaskModel = TaskModel as jest.Mocked<typeof TaskModel>;

describe('integracion [GET] /', () => {
  beforeAll(async () => {
    server = new Server(3000);
    app = server.app;
    const nuevaTarea = await getOneTask();
    console.log(nuevaTarea);
  });
  test('deberia responder hola mundo!!', () => {
    return request(app)
      .get('/')
      .expect(200)
      .then((response) => {
        expect(response.text).toEqual(hola);
      });
  });
});

describe('integracion [GET] /tasks/', () => {
  test('la cantidad de elementos del arreglo debe ser 18', () => {
    const tareas = getMultipleTask(18);
    mockedTaskModel.getTasks.mockResolvedValue(tareas);
    return request(app)
      .get('/tasks/')
      .then(({ body }) => {
        expect(body.length).toEqual(18);
      });
  });
});
