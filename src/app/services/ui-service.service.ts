import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TasksService } from 'src/app/services/tasks.service';


@Injectable({
  providedIn: 'root'
})
export class UiServiceService {

  constructor( private alertController: AlertController,
    private tasksService: TasksService,) { }

  async alertaInformativa(message: string) {
    const alert = await this.alertController.create({
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

   async alertaEliminarTarea(task,accion) {
     await this.alertController.create({
      header: 'AVISO',
      message: '¿Estás seguro de eliminar la tarea?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            accion;
          }
        },
        {
          text: 'Si',
          handler: () => {
            task.estatus = 'Cancelado';
            this.tasksService.updateTask(task, task._id );
            window.location.reload();
          }
        }
      ]
    }).then(res => {
       res.present();     
    });
  }

  
  
}
