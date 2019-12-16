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
  public correctLogin: boolean;
  public routerLogin: string;
  user: UserData;

constructor(private autorizationService: AutorizationService) { }

 public onLoginUser(email, pass) {

  this.autorizationService.LoginUser(email, pass)
  .subscribe(data => console.log(data));
  
  }
}
