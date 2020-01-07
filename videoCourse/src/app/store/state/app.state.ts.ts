import { RouterReducerState } from "@ngrx/router-store";

import { UserState, initialUserState} from "./uses.state";
import { configState, initialConfigState} from "./config.state copy";

export interface AppState {
   router?: RouterReducerState;
   users: UserState;
   config: configState;
}

export const initialAppState: AppState = {
  users: initialUserState,
  config: initialConfigState
}

export function getItitialState(): AppState  {
  return initialAppState

}