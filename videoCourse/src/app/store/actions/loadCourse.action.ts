import { createAction, props } from '@ngrx/store';
import {  PageListData } from '../../core/models/page-list-data';


export const loadCourses = createAction('[Course Page] Load Courses');
export const loadCoursesSucces = createAction('[Course Page] Load Courses Succes', props<{courses: PageListData[]}>());

