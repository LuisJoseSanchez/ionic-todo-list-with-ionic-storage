import { Component } from '@angular/core';
import { Task } from '../model/task';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tasks: Task[] = [];

  constructor(private taskService: TasksService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }
}
