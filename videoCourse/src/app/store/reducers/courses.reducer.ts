import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { PageListData } from '../../core/models/page-list-data';
import * as loadCourses from '../actions/loadCourse.action';


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
    };}),
  on(loadCourses.loadMoreCourses, (state, {courses}) => {
    return {
      ...state,
      courses,
    };
  }),
  on(loadCourses.deleteCourseSucces, (state, {id:number}) => {
    const courses = state.courses;
    return {
      ...state,
     courses: courses.concat(courses)
    }}),
 );

export function loadStateReducer(state, action) {
  console.log('del', state, action);

  return _loadStateReducer(state, action);
}

export const getCoursesState = createFeatureSelector<CoursesState>(featureKey);
export const selectCourses = createSelector(getCoursesState, state => state.courses);