import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { DataCourseService } from '../../core/services/data-course.service';
import { deleteCourseSucces  } from '../actions/loadCourse.action';
import { Router } from '@angular/router';
import { addNewCourseSucces } from "../actions/addCourse.actions";


@Injectable({
  providedIn: 'root'
})
export class DeleteCourse {
  addNewCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Course] Add New Course'),
      mergeMap(({newCourseItem}) => this.dataCourseService.saveNewItem(newCourseItem)
      .pipe(
        map((courses) => addNewCourseSucces({courses})),
        catchError(() => EMPTY)
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


