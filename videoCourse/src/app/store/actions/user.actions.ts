import { Action } from "@ngrx/store";
import { User } from "../../core/models/uses";

export enum UserActions {
  GetUser = "[User] Get User",
  GetUsers  = "[User] Get Users",
  GetUserSucces  = "[User] Get User Succes",
  GetUsersSucces = "[User] Get Users Succes"
}

export class GetUsers implements Action {
  public readonly type = UserActions.GetUsers;
}

export class GetUser implements Action {
  public readonly type = UserActions.GetUser;
}

export class GetUserSucces implements Action {
  public readonly type = UserActions.GetUserSucces;
}

export class GetUsersSucces implements Action {
  public readonly type = UserActions.GetUsersSucces;
}

export type IUserActions = GetUser|GetUsers|GetUserSucces|GetUsersSucces