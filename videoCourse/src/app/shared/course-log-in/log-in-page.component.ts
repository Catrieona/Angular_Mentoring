import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AutorizationService } from '../../core/services/autorization.service';
import {UserData} from '../../core/models/user-data';
import { Router} from '@angular/router';
import { of, Subscription } from 'rxjs';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogInPageComponent  {

  public routerLogin: string;
  user: UserData;
  userToken;

constructor(private autorizationService: AutorizationService,
            private router: Router
  ) { }

  public checkUserInfo(email, pass) {

    this.autorizationService.loginUser(email, pass)
    .subscribe(data => {
      this.userToken = data;
      if (this.userToken) {
      this.router.navigateByUrl('/courses');
      }
    });
  }
}