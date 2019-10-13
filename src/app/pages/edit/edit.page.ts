import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { TasksService } from 'src/app/services/tasks.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  task: Task = {title: '', description: ''};

  constructor(
    private tasksService: TasksService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.task = this.tasksService.getTask(+id);
    }
  }

  saveTask() {
    this.tasksService.saveTask(this.task);
  }

}
