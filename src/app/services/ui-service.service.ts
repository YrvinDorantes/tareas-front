import { EventEmitter, Injectable, Output } from '@angular/core';
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

   async alertaEliminarTarea(task,accion,mensaje,estatus) {
     await this.alertController.create({
      header: 'AVISO',
      message: mensaje,
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
            task.estatus = estatus;
            this.tasksService.updateTask(task, task._id );
          }
        }
      ]
    }).then(res => {
       res.present();     
    });
  }

  
  
}
