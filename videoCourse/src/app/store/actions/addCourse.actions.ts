import { createAction, props } from '@ngrx/store';
import { PageListData } from '../../core/models/page-list-data';




export const addNewCourse = createAction('[Course] Add New Course', props<{newCourseItem}>());
export const addNewCourseSucces = createAction('[Course] Add New Course Succes', props<{courses}>());