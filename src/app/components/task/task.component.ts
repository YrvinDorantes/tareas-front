import { UpdateTaskComponent } from './../update-task/update-task.component';
import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces/interfaces';
import { ModalController, NavController } from '@ionic/angular';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {

  @Input() task: Task = {};
  dataReturned: any;

  taskItem = {
    titulo: '',
    subtitulo: '' ,
    prioridad: '',
    categoria: '',
    estatus: '',
    dateTask: ''
  }


  constructor(public modalCtrl: ModalController,
              private uiService: UiServiceService,
              private navCtrl: NavController) { }

  ngOnInit() {}


  async updateTask(task){

    const modal = await this.modalCtrl.create({
        component: UpdateTaskComponent,
        componentProps:{
          task
        }
    });

    return await modal.present();
  }


  async deleteTask(task){
    const paginaPrincipal = this.navCtrl.navigateRoot('/main/tabs/tab1', {animated: true});
    await this.uiService.alertaEliminarTarea(task,paginaPrincipal);
  }

  

 

}
