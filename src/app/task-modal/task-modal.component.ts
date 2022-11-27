import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from "angular-modal-simple";
import { NotifService } from '../notif.service';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.css']
})
export class TaskModalComponent implements OnInit {

  @Input() validEvent?: any;

  constructor(private modalService: ModalService, private notifService: NotifService) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.modalService.closeAll();
  }

  validModal() {
    if(!this.validEvent) return this.validEvent;
    this.validEvent();
    this.modalService.closeAll();
    this.notifService.addOrDelete("Task Supprimé !!!");
  }
}
