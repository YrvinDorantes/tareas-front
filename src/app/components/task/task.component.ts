import { UpdateTaskComponent } from './../update-task/update-task.component';
import { Component, Input, OnInit ,EventEmitter, Output} from '@angular/core';
import { Task } from 'src/app/interfaces/interfaces';
import { ModalController, NavController } from '@ionic/angular';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() taskValue: Task = {};
  @Input() task: Task = {};
  dataReturned: any;
  @Output() deleteEventInstanceEvent: EventEmitter<any> = new EventEmitter<any>();
  


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
              private navCtrl: NavController,
              private tasksService: TasksService) { }

  ngOnInit() {}

 async deleteTask() {


    this.deleteEventInstanceEvent.emit(this.task);

    if (this.task != null){
      this.task.estatus = "Cancelado"
      const eliminado = await this.tasksService.updateTask(this.task,this.task._id);
      await this.uiService.alertaInformativa('Tarea eliminada correctamente.');
      this.deleteEventInstanceEvent.emit(this.task);
    }
   
  }


  async updateTask(task){

    const modal = await this.modalCtrl.create({
        component: UpdateTaskComponent,
        componentProps:{
          task
        }
    });

    return await modal.present();
  }


  async completeTask(task){
    this.task.estatus = 'Completado';
    const creado = await this.tasksService.updateTask(this.task,this.task._id);
    await this.uiService.alertaInformativa('Tarea completada correctamente.');
  }

  

 

}
