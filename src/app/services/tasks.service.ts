import { Injectable } from '@angular/core';
import { Task } from '../model/task';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: Task[] = [];

  constructor(private storage: Storage) {
    this.getTasks().then(
      data => this.tasks = data == null ?  [] : data
    );
  }

  public getTasks(): Promise<Task[]> {
    return this.storage.get('tasks');
  }

  public getTask(id: number): Task {
    return this.tasks.filter(t => t.id == id)[0];
  }

  public saveTask(t: Task): Promise<boolean> {
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
    return this.storage.set('tasks', this.tasks);
  }

  public deleteTask(id: number): Promise<boolean> {
    this.tasks = this.tasks.filter(t => t.id != id);
    return this.storage.set('tasks', this.tasks);
  }
}
