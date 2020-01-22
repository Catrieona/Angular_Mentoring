import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromAuth from './auth.reducer';

import * as fromCourses from './courses.reducer';

export interface State {
  auth: fromAuth.AuthState;
  courses: fromCourses.CoursesState;
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.authReducer,
  courses: fromCourses.loadStateReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
