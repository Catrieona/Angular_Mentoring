import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInPageComponent } from './shared/course-log-in/log-in-page.component';
import { AddNewCourseComponent } from './shared/course-add-new/add-new-course.component';


const routes: Routes = [
  {path: 'login', component: LogInPageComponent},
  {path: 'addNew', component: AddNewCourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
