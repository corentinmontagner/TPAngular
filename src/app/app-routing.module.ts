import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

const routes: Routes = [{
  path : "",
  component: HomeComponent
}, {
  path : "about",
  component: AboutComponent
}, {
  path : "task/:id",
  component: TaskDetailComponent
}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
