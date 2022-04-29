import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {

  @Input() task: Task = {};

  constructor() { }

  ngOnInit() {}

}
