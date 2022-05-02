import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private tasksService: TasksService,
              private route: Router) {}

  task = {
    titulo: '',
    subtitulo: '' ,
    prioridad: '',
    categoria: '',
    estatus: 'Pendiente',
    dateTask: ''
  }


  async crearTask(){
    const creado = await this.tasksService.crearTask(this.task);

    this.task = {
      titulo: '',
      subtitulo: '' ,
      prioridad: '',
      categoria: '',
      estatus: 'Pendiente',
      dateTask: ''
    };

    this.route.navigateByUrl('/main/tabs/tab1');
  }

 

  


}
