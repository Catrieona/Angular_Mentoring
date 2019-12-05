import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AutorizationService } from '../../core/services/autorization.service';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogInPageComponent  {
  public loginUser: boolean;
  public routerLogin:string;

constructor(private autorizationService: AutorizationService) { }

 public LoginUser (email: string, pass: string) {
   this.autorizationService.LoginUser(email, pass);
   this.loginUser = this.autorizationService.userLogin
   if (this.loginUser) {
     this.routerLogin = ""
   } else {
     console.log("email is not correct")
   }
  }
}
