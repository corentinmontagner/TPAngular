import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ITask } from '../ITask';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  targetTask: ITask | null = null;
  
  constructor(private route: ActivatedRoute, private taskService: TaskService) {  }
  
  ngOnInit(): void {
    const targetId = this.route.snapshot.paramMap.get('id');

    this.taskService.getTasks().subscribe((tasks) => {
      const searchTask = tasks.find(task => task.id.toString() === targetId);

      if(searchTask) {
        this.targetTask = searchTask;
      }
    })
  }

}
