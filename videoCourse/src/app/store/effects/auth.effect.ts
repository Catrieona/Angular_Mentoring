import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map,  mergeMap, } from 'rxjs/operators';
import {
  loginUser, loginUserSucces
} from '../../store/actions/auth.actions';
import { EMPTY } from 'rxjs';
import { AutorizationService } from '../../core/services/autorization.service';
 
@Injectable()
export class AuthEffects {
  AuthUser$ = createEffect(() => this.actions$.pipe(
    ofType('[Auth] Login User'),
    mergeMap(() => this.autorizationService.loginUser(email, password)
      .pipe(
        map(userToken => ({ type: '[Auth] Login User Succes', payload: userToken })),
        catchError(() => EMPTY)
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private autorizationService: AutorizationService
  ) {}
}