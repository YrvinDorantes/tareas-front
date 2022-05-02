import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Task } from 'src/app/interfaces/interfaces';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  tasks: Task[] = [];

  habilitado = true;

  constructor( private tasksService: TasksService,
              private modalCtrl: ModalController) {}


  ngOnInit() {
    this.siguientes();

    this.tasksService.nuevoTask
    .subscribe( task => {
      this.tasks.unshift( task );
    });
  }

  recargar( event?){
      this.siguientes( event, true);
      this.habilitado = true;
      this.tasks = [];
  }

  siguientes( event?, pull: boolean = false){
      
    this.tasksService.getTasks( pull )
      .subscribe( resp => {
        console.log( resp );
        this.tasks.push( ...resp.tasks );

        if( event ){
            event.target.complete();

            if( resp.tasks.length === 0){
              this.habilitado = false;
            }
        }
      });
  }

}
