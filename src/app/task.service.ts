import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ITask, Task } from './ITask';
import { TASK } from './mock-task';
import { ModalService } from "angular-modal-simple";
import { TaskNameComponent } from './task-name/task-name.component';
import { TaskModalComponent } from './task-modal/task-modal.component';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  todoList : ITask[] = TASK

  constructor(private modalService: ModalService) { }

  addTask(dataInput: string){
    this.todoList.push(new Task(dataInput));
  }

  deleteTask(index: number) {
    this.todoList.splice(this.todoList.findIndex(i => i.id === index), 1);
  }

  getTasks(): Observable<ITask[]> {
    return of(this.todoList);
  }
}