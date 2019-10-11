import { Component } from '@angular/core';
import { Task } from '../model/task';
import { TasksService } from '../services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tasks: Task[] = [];

  constructor(
    private taskService: TasksService,
    private router: Router) {}
/*
  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }
*/

  ionViewWillEnter() {
    this.tasks = this.taskService.getTasks();
  }

  goEditTask() {
    this.router.navigateByUrl('/edit');
  }
}
