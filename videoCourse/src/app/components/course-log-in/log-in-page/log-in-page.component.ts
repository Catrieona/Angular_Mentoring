import { Component, OnInit } from '@angular/core';
import { AutorizationService } from '../autorization.service';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.scss']
})
export class LogInPageComponent  {


constructor(private autorizationService: AutorizationService) { }

 public LoginUser (email: string, pass: string) {
   this.autorizationService.LoginUser(email, pass);
   localStorage.setItem('userLoginInfo', JSON.stringify({userEmail: email, userPass: pass}))
 }


}