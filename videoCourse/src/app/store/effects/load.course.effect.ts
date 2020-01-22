import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { switchMap, map, mergeMap, catchError, tap } from 'rxjs/operators';
import { DataCourseService } from '../../core/services/data-course.service';
import { loadCoursesSucces, loadMoreCoursesSucces, editCourseSucces, deleteCourseSucces } from '../actions/loadCourse.action';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoadCourses {
  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Course Page] Load Courses'),
      mergeMap(() => this.dataCourseService.getItemList()
      .pipe(
        map(courses => loadCoursesSucces({courses} )),
        catchError(() => EMPTY)
    ))));
  loadMoreCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Course Page] Load More Courses'),
      mergeMap(() => this.dataCourseService.onLoadMoreCourses()
      .pipe(
        map(courses => loadMoreCoursesSucces( {courses} )),
        catchError(() => EMPTY)
      )
    )
  )
);
  deleteCourses$ = createEffect(() =>
      this.actions$.pipe(
        ofType('[Course Page] Delete Course'),
        mergeMap((id) => this.dataCourseService.removeItem(id)
        .pipe(
          map(() => deleteCourseSucces(id)),
          catchError(() => EMPTY)
        ))
      )
    );

  addNewCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Course Page] Add New Course'),
      mergeMap(({newCourseItem}) => this.dataCourseService.saveNewItem(newCourseItem)
      .pipe(
        switchMap((courses) => EMPTY),
        catchError(() => EMPTY)
      ))
    )
  );

  editCourses$ = createEffect(() =>
  this.actions$.pipe(
    ofType('[Course Page] Edit Course'),
    mergeMap(({id, dataCourse}) => this.dataCourseService.editCourseItem(id, dataCourse)
    .pipe(
      map((response) => editCourseSucces({model: response})),
      catchError(() => EMPTY)
    ))
  )
);

  constructor(
    private actions$: Actions,
    private dataCourseService: DataCourseService,
    private router: Router,
  ) {}
}


