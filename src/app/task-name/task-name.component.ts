import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask, Task } from '../ITask';
import { NotifService } from '../notif.service';
import { TaskModalComponent } from '../task-modal/task-modal.component';
import { TaskService } from '../task.service';
import { ModalService } from "angular-modal-simple";

@Component({
  selector: 'app-task-name',
  templateUrl: './task-name.component.html',
  styleUrls: ['./task-name.component.css']
})
export class TaskNameComponent implements OnInit {

  @Input() todoList: ITask[] = [];
  @Input() task: ITask = new Task("Default task");
  @Input() pickedTask?: ITask;

  @Output() selectEvent = new EventEmitter();

  constructor(private taskService : TaskService, private notifService : NotifService, private modalService: ModalService) {}

  ngOnInit(): void {
  }

  isDone(){
    if(this.task?.isDone === false)
      this.task.isDone = true
    else if(this.task?.isDone === true)
      this.task.isDone = false
  }

  handleSelectTask() {
    this.selectEvent.emit()
  }

  deleteTask() {
    this.modalService.display(TaskModalComponent, {
      data:{
        validEvent:() => {
          this.taskService.deleteTask(this.task.id);
        }
      }
    });
  }
}
