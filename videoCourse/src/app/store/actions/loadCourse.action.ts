import { createAction, props } from '@ngrx/store';
import {  PageListData } from '../../core/models/page-list-data';


export const loadCourses = createAction('[Course Page] Load Courses');
export const loadCoursesSucces = createAction('[Course Page] Load Courses Succes', props<{courses: PageListData[]}>());
export const loadMoreCourses = createAction('[Course Page] Load More Courses');
export const loadMoreCoursesSucces = createAction('[Course Page] Load More Courses Succes', props<{courses: PageListData[]}>());

export const deleteCourse = createAction('[Course Page] Delete Course', props<{id: number}>());
export const deleteCourseSucces = createAction ('[Course Page] Delete Course Succes', props<{id:number}>());

export const addNewCourse = createAction('[Course Page] Add New Course', props<{newCourseItem}>());
export const addNewCourseSucces = createAction('[Course] Add New Course Succes', props<{courses}>());

export const editCourse = createAction('[Course Page] Edit Course', props<{id: number, dataCourse: PageListData}>());
export const editCourseSucces = createAction('[Course Page] Edit Course Succes', props<{model: PageListData}>());


