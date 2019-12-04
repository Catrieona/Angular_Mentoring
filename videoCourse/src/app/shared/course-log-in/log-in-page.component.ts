import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AutorizationService } from '../../core/services/autorization.service';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogInPageComponent  {


constructor(private autorizationService: AutorizationService) { }

 public LoginUser (email: string, pass: string) {
   this.autorizationService.LoginUser(email, pass);
  }
}