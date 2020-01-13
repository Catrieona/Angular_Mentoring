import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { DataCourseService } from '../../core/services/data-course.service';
import { loadCoursesSucces, loadMoreCourses  } from '../actions/loadCourse.action';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DeleteCourse {
  deleteCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Course Page] Delete Course'),
      mergeMap((id) => this.dataCourseService.removeItem(id)
      .pipe(
        map(courses => loadCoursesSucces({courses} )),
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


