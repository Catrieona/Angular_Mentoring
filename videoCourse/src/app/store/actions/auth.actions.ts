import { createAction, props } from '@ngrx/store';

export const loginUser = createAction('[Auth] Login User', props<{email: string, password: string }>());
export const loginUserSucces = createAction('[Auth] Login User Succes', props<{token: string}>());
