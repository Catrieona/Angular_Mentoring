import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AutorizationService } from '../../core/services/autorization.service';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogInPageComponent  {
  public correctLogin: boolean;
  public routerLogin: string;

constructor(private autorizationService: AutorizationService) { }

 public onLoginUser(email: string, pass: string) {
   this.autorizationService.LoginUser(email, pass);
   this.correctLogin = this.autorizationService.userLogin;
   if (this.correctLogin) {
      this.routerLogin = '';
      } else {
      console.log('email is not correct');
    }
  }
}
