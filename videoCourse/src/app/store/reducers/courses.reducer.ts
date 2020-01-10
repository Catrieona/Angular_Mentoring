import { createReducer, on } from '@ngrx/store';
import { PageListData } from '../../core/models/page-list-data';
import { loadCoursesSucces } from '../actions/loadCourse.action'


export interface CoursesState {
  coruses: PageListData[];
}

export const initialState: CoursesState = {
  coruses: [],
};

const _loadStateReducer = createReducer(initialState,
  on(loadCoursesSucces, (state, {courses}) => {
    return {
      ...state,
      courses
    };
  })
 );

export function loadStateReducer(state, action) {
  return _loadStateReducer(state, action);
}