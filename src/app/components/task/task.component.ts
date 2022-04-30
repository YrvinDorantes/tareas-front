import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces/interfaces';
import { TasksService } from 'src/app/services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {

  @Input() task: Task = {};

  constructor(private tasksService: TasksService,
              private route: Router) { }

  ngOnInit() {}

  

 

}
