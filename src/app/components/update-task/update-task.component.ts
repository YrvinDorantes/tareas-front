import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController,  NavController } from '@ionic/angular';
import { Task } from 'src/app/interfaces/interfaces';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.scss'],
})
export class UpdateTaskComponent implements OnInit {

  @Input() task: Task = {};


  constructor(private tasksService: TasksService,
                private route: Router,
                private modalController: ModalController,
                private navCtrl: NavController) { }

                

  ngOnInit() {
    
  }

  async updateTask(){
    console.log(this.task);
    const actualizado = await this.tasksService.updateTask(this.task,this.task._id);
    this.navCtrl.navigateRoot('/main/tabs/tab1', {animated: true});
    this.closeModel();
  }

  async closeModel() {
    const close: string = "Modal Removed";
    await this.modalController.dismiss(close);
  }

}
