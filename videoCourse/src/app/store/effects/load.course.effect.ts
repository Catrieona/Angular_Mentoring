import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { DataCourseService } from '../../core/services/data-course.service';
import { loadCoursesSucces  } from '../actions/loadCourse.action';
import { Action } from '@ngrx/store';
import {  PageListData } from '../../core/models/page-list-data';
import { Router } from '@angular/router';


Injectable()
export class LoadCourses {
  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Course Page] Load Courses'),
      mergeMap(() => 
      this.dataCourseService.getItemList()
      .pipe(
        map(courses => loadCoursesSucces({courses})),
        // map(courses => ({ type: '[Course Page] Load Courses Succes', payload: courses })),
        tap(() => {
          console.log(111);
        })
        // catchError(() => EMPTY)
      )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private dataCourseService: DataCourseService,
    private router: Router,
  ) {}
}


