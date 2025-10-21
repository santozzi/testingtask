import { Task } from '../../models/task';
import { faker } from '@faker-js/faker';

export const getOneTask = (): Promise<Task> => {
  const nuevaTarea = new Task(faker.hacker.phrase(), faker.datatype.boolean(), faker.string.uuid());

  return Promise.resolve(nuevaTarea);
};

export const getMultipleTask = (cant: number): Promise<Array<Task>> => {
  return new Promise(async (resolve, reject) => {
    const multiTask = new Array<Task>();
    if (cant <= 0) {
      reject(new Error('la cantidad debe ser mayor que 0'));
    } else {
      for (let i = 0; i < cant; i++) {
        multiTask.push(await getOneTask());
      }
      resolve(multiTask);
    }
  });
};
