import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { loginUser } from '../../store/actions/auth.actions';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogInPageComponent  {
  public userToken$: Observable<any>;

  constructor(private store: Store<any>) {
    this.userToken$ = store.pipe(select('auth', 'userToken'));
  }
  public checkUserInfo(email, password) {
    this.store.dispatch(loginUser({email, password}));
  }
}

