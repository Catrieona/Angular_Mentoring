import { createReducer, on } from '@ngrx/store';
import { loginUserSucces } from '../actions/auth.actions';

export interface AuthState {
  token: string;
}

export const initialState: AuthState = {
  token: null,
};

const _authReducer = createReducer(initialState,
  on(loginUserSucces, (state, {token}) => {
    return {
      ...state,
      token,
    };
  })
 );

export function authReducer(state, action) {
  console.log('auth', state, action);
  return _authReducer(state, action);
}