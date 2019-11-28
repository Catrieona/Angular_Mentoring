import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInPageComponent } from './shared/course-log-in/log-in-page.component';
import { AddNewCourseComponent } from './shared/course-add-new/add-new-course.component';
import { EditCourseComponent } from './shared/course-edit/edit-course.component';
import { CoursePageComponent } from "./components/course-page/course-page.component"

const routes: Routes = [
  {path: '', component: CoursePageComponent},
  {path: 'courses/login', component: LogInPageComponent},
  {path: 'courses/new', component: AddNewCourseComponent},
  {path: 'courses/edit', component: EditCourseComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
