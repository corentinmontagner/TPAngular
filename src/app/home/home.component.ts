import { Component, Input, OnInit } from '@angular/core';
import { ITask, Task } from '../ITask';
import { TASK } from '../mock-task';
import { NotifService } from '../notif.service';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'tp1-todolist';
  taskParent = new Task("Parent Task")
  task = new Task("Faire du sport")
  pickedTask? : ITask
  taskList : ITask[] = []
  
  dataInput = ""

  constructor(private taskService : TaskService, private notifService: NotifService) { 
    
  }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(){
    this.taskService.getTasks().subscribe(tasks => this.taskList = tasks);
  }

  add(){
    this.taskService.addTask(this.dataInput)
    this.dataInput = "";
    this.notifService.addOrDelete("Task Créé !!!");
    this.getTasks;
  }

  selectTask(task : ITask){
    this.pickedTask = task;
  }
}

