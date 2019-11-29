import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInPageComponent } from './shared/course-log-in/log-in-page.component';
import { AddNewCourseComponent } from './shared/course-add-new/add-new-course.component';
import { EditCourseComponent } from './shared/course-edit/edit-course.component';
import { CoursePageComponent } from './components/course-page/course-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'courses', pathMatch: 'full'},
  {path: 'courses', component: CoursePageComponent,
      children: [
        {
          path: 'new',
          component: AddNewCourseComponent,
        },
        {
          path: 'edit/:id',
          component: EditCourseComponent
        },
      ]
  },
  {path: 'courses/login', component: LogInPageComponent},
  // { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
