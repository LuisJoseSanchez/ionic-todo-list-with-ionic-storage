import { Injectable } from '@angular/core';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: Task[] = [];

  constructor() {
    this.tasks = [
      {
        id: 0,
        title: 'Ordenar el escritorio',
        description: 'Sacarlo todo, limpiar y tirar lo que no sirve.'
      },
      {
        id: 1,
        title: 'Hacer la colada',
        description: 'Separar la ropa blanca de la ropa de color.'
      }
    ];
  }

  public getTasks(): Task[] {
    return this.tasks;
  }

  public getTask(id: number): Task {
    return this.tasks.filter(t => t.id == id)[0];
  }

  public saveTask(t: Task) {
    if (t.id == undefined) {
      // New task
      const maxId = this.tasks.reduce((max, t) => t.id > max? t.id : max, -1);
      const newTask = {id: maxId + 1, title: t.title, description: t.description};
      this.tasks.push(newTask);
    } else {
      // Edit task
      this.deleteTask(t.id);
      this.tasks.push(t);
      this.tasks.sort((t1, t2) => t1.id < t2.id ? -1 : 1);
    }
  }

  public deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id != id);
  }
}
