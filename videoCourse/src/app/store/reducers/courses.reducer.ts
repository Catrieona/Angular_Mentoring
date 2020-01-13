import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { PageListData } from '../../core/models/page-list-data';
import { loadCoursesSucces } from '../actions/loadCourse.action'


const featureKey = 'courses';

export interface CoursesState {
  courses: PageListData[];
}

export const initialState: CoursesState = {
  courses: [],
};

const _loadStateReducer = createReducer(initialState,
  on(loadCoursesSucces, (state, {courses}) => {
    return {
      ...state,
      courses,
    };
  })
 );

export function loadStateReducer(state, action) {
  console.log('load', state, action);

  return _loadStateReducer(state, action);
}

export const getCoursesState = createFeatureSelector<CoursesState>(featureKey);
export const selectCourses = createSelector(getCoursesState, state => state.courses);