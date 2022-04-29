import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './task/task.component';

import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    TasksComponent,
    TaskComponent
  ],
  exports:[
    TasksComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
