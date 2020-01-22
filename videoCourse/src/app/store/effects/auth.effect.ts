import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, exhaustMap, map,  mergeMap, tap, } from 'rxjs/operators';
import {loginUserSucces} from '../../store/actions/auth.actions';
import { EMPTY } from 'rxjs';
import { AutorizationService } from '../../core/services/autorization.service';
import { Router } from '@angular/router';
 
@Injectable()
export class AuthEffects {
  AuthUser$ = createEffect(() => this.actions$.pipe(
    ofType('[Auth] Login User'),
    mergeMap(({email, password}) => this.autorizationService.loginUser(email, password)
      .pipe(
        map(data => loginUserSucces(data)),
        tap(() => {
          this.router.navigate(['/courses']);
        }),
        catchError(() => EMPTY)
      ))
    )
  );
  constructor(
    private actions$: Actions,
    private autorizationService: AutorizationService,
    private router: Router,
  ) {}
};