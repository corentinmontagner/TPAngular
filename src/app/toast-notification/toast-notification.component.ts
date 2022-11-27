import { Component, OnInit } from '@angular/core';
import { NotifService } from '../notif.service';

@Component({
  selector: 'app-toast-notification',
  templateUrl: './toast-notification.component.html',
  styleUrls: ['./toast-notification.component.css']
})
export class ToastNotificationComponent implements OnInit {
  
  listNotif: any[] = [];

  constructor(private notifService : NotifService) { }

  ngOnInit(): void {
    this.listNotif = this.notifService.notifs;
  }
}
