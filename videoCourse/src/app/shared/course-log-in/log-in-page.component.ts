import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AutorizationService } from '../../core/services/autorization.service';
import {UserData} from '../../core/models/user-data';

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

constructor(private autorizationService: AutorizationService) { }

  public checkUserInfo(email, pass) {

    this.autorizationService.loginUser(email, pass)
    .subscribe(data => {this.userToken = data; this.getUserAccess()});
  }

  public getUserAccess() {
    if (this.userToken) {
      this.routerLogin = '';
    }
  }
}