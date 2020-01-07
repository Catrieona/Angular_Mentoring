import { User } from "../../core/models/uses";

export interface UserState {
    users: User[];
    selectetUser: User;
}

export const initialUserState: UserState = {
  users: null,
  selectetUser: null
}