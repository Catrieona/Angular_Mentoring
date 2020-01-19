import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { PageListData } from '../../core/models/page-list-data';
import * as loadCourses from '../actions/loadCourse.action';
import * as addNewCourse from "../actions/addCourse.actions";


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
      courses
    };}),
  on(loadCourses.loadMoreCoursesSucces, (state, {courses}) => {
    return {
      ...state,
      courses
    };
  }),
  on(loadCourses.deleteCourseSucces, (state, {id}) => {
    const courses = state.courses.filter( val => val.id != id);
    
    return {
      ...state,
      courses
    }}),
    on (addNewCourse.addNewCourseSucces, (state, {courses}) => {
      return {
        ...state,
        courses
      }}),
 );

export function loadStateReducer(state, action) {
  console.log('--->', state, action);

  return _loadStateReducer(state, action);
}

export const getCoursesState = createFeatureSelector<CoursesState>(featureKey);
export const selectCourses = createSelector(getCoursesState, state => state.courses);