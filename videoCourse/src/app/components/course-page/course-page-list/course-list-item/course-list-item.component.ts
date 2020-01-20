import { Component, Output, Input, EventEmitter, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { DataCourseService } from '../../../../core/services/data-course.service';
import { PageListData } from '../../../../core/models/page-list-data';
import {HttpClient} from '@angular/common/http';
import { Store, select } from '@ngrx/store';
// import { BehaviorSubject, Observable, Subject, combineLatest } from 'rxjs';
// import { auditTime, startWith, filter, tap, debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {
  trigger,
  stagger,
  query,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import {selectCourses } from "../../../../store/reducers/courses.reducer";

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition('* <=> *', [
        query(':enter', [
          style({ opacity: 0, width: '0px' }),
          stagger(200, [
            animate('300ms ease-out', style({ opacity: 1, width: '*' })),
          ]),
        ], { optional: true })
      ])
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseListItemComponent implements OnInit {
  @Input() courseState: string;
  @Output() onDeleteCourseItem = new EventEmitter<number>();

  public courseData;
  private id: number;
  public dataCourse;

  dataCourse$: Observable<PageListData[]> = this.store.select (selectCourses);

constructor(private dataCourseService: DataCourseService, private httpClient: HttpClient,
  private store: Store<any>
          ) {}
  
  ngOnInit() {
    // this.getDataCourse();
      this.store.dispatch({ type: '[Course Page] Load Courses' });
  }

  // public getDataCourse(): void {
  // this.dataCourseService.getItemList()
  // this.dataCourseService.courses$
  //   .subscribe ((dataCourse: PageListData[]) => {
  //     this.dataCourse = dataCourse;
  //     this.cdRef.markForCheck();
  //   });
  // }

  public deleteCourseItem(id: number) {
    this.onDeleteCourseItem.emit(id);
    // this.store.dispatch({ type: '[Course Page] Load More Courses' });
   

    // this.getDataCourse();
  }

  public loadMoreCourses() {
  // this.dataCourseService.onLoadMoreCourses();
  this.store.dispatch({ type: '[Course Page] Load More Courses' });
  }

  public trackById(idx, item) {
      return item.id;
  }
}
