import { Component } from '@angular/core';
import { Task } from '../model/task';
import { TasksService } from '../services/tasks.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tasks: Task[] = [];

  constructor(
    private taskService: TasksService,
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  goEditTask() {
    this.router.navigateByUrl('/edit');
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getTasks();
  }

  async presentAlertConfirm(id: number, title: string) {
    console.log('alerta');
    const alert = await this.alertController.create({
      header: 'Borrar tarea',
      message: `¿Estás seguro que quieres borrar la tarea <strong> ${title}</strong>?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Aceptar',
          handler: () => {
            this.deleteTask(id);
          }
        }
      ]
    });

    await alert.present();
  }

}
