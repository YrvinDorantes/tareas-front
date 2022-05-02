import { Component, Input, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {

  @Input() tasks: Task[] = [];

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
  }

  deleteEvent(event: any) {
    const itemIndex = this.tasks.findIndex(el => el === event);
    this.tasks.splice(itemIndex, 1);
  }


}
