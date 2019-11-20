import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInPageComponent } from './components/course-log-in/log-in-page/log-in-page.component';


const routes: Routes = [
  {path: 'login', component: LogInPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
