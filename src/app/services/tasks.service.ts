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
}
