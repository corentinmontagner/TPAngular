import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { ITask } from '../ITask';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  apiUrl = "https://api.agify.io";
  objName: any = null
  dataInput = "";

  constructor(private http: HttpClient) {  }
  
  ngOnInit(): void {
    
  }
  
  getName(objName: string) {
    objName = objName.trim();
    
    const options = objName ?
   { params: new HttpParams().set('name', objName) } : {};

    return this.http.get<any[]>(this.apiUrl, options);
  }

  afficher() {
    this.getName(this.dataInput).subscribe(data => {
      this.objName = data;
    });
  }
}
