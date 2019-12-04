import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogInPageComponent } from '../../shared/course-log-in/log-in-page.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [LogInPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LoginModule { }
