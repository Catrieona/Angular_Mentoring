import { createReducer, on } from '@ngrx/store';
import { loginUser, loginUserSucces } from '../actions/auth.actions';
import { UserData } from "../../core/models/user-data"
 
export const initialState: UserData = {
  id: null,
  fakeToken: null,
  name: {
      first: null,
      last: null,
    },
  login: null,
  password: null,
};
 
const _counterReducer = createReducer(initialState,
  on(loginUser, state => state + 1),
  on(loginUserSucces, state => {if (this.userToken.id) {
     this.router.navigateByUrl('/courses')}})
 );
 
export function counterReducer(state, action) {
  return _counterReducer(state, action);
}