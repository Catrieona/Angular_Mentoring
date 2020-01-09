import { Action } from "@ngrx/store";
import { createAction, props } from '@ngrx/store';
import { UserData } from "../../core/models/user-data";



export const loginUser = createAction('[Auth] Login User', props<{email: string, password: string }>());
export const loginUserSucces = createAction('[Auth] Login User Succes', props<UserData>());



// export type IUserActions = GetUser|GetUsers|GetUserSucces|GetUsersSuccesw