import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './task/task.component';

import { IonicModule } from '@ionic/angular';
import { AvatarSelectorComponent } from './avatar-selector/avatar-selector.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  entryComponents:[
    UpdateTaskComponent,
    TaskComponent,
  ],
  declarations: [
    TasksComponent,
    TaskComponent,
    AvatarSelectorComponent,
    UpdateTaskComponent
  ],
  exports:[
    TasksComponent,
    TaskComponent,
    AvatarSelectorComponent,
    UpdateTaskComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class ComponentsModule { }
