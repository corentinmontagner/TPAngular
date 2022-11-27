import { Injectable, TemplateRef } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ITask } from './ITask';

@Injectable({
  providedIn: 'root'
})
export class NotifService {
  static idCounter = 0;
  notifs: any[] = [];

  constructor() { }

  addOrDelete(title: string){
    const targetIdRemoving = NotifService.idCounter;

    this.notifs.push({
      id: NotifService.idCounter,
      title: title
    })

    NotifService.idCounter++;

    setTimeout(() => {
      this.remove(targetIdRemoving);
    }, 2000)
  }

  remove(notif: any) {
		this.notifs.splice(this.notifs.findIndex(i => i.id !== notif), 1);
	}

}
