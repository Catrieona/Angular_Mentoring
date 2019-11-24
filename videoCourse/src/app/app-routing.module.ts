import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInPageComponent } from './components/course-log-in/log-in-page/log-in-page.component';
import { AddNewCourseComponent } from './components/course-add-new/add-new-course.component';


const routes: Routes = [
  {path: 'login', component: LogInPageComponent},
  {path: 'addNew', component: AddNewCourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
