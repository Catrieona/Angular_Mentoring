import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { PageListData } from '../../core/models/page-list-data';
import * as loadCourses from '../actions/loadCourse.action'


const featureKey = 'courses';

export interface CoursesState {
  courses: PageListData[];
}

export const initialState: CoursesState = {
  courses: [],
};

const _loadStateReducer = createReducer(initialState,
  on(loadCourses.loadCoursesSucces, (state, {courses}) => {
    return {
      ...state,
      courses,
    }}),
  on(loadCourses.loadMoreCourses, (state, {courses}) => {
    return {
      ...state,
      courses,
    };  
  }),
  on(loadCourses.deleteCourse, (state, {id}) => {
    return {
      ...state,
      id,
    }}),
 );
 

export function loadStateReducer(state, action) {
  console.log('load', state, action);

  return _loadStateReducer(state, action);
}

export const getCoursesState = createFeatureSelector<CoursesState>(featureKey);
export const selectCourses = createSelector(getCoursesState, state => state.courses);