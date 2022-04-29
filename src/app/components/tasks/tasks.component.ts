import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {

  @Input() tasks: Task[] = [];

  constructor() { }

  ngOnInit() {
    console.log(this.tasks);
  }

}
