import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataCourseService } from '../../../core/services/data-course.service';
import { fromEvent } from 'rxjs';
import { map, takeUntil, filter, distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { throws } from 'assert';


@Component({
  selector: 'app-course-page-search',
  templateUrl: './course-page-search.component.html',
  styleUrls: ['./course-page-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class CoursePageSearchComponent {
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private dataCourseService: DataCourseService) {}
  public userInutValue: string;
  tempData: any = [];

  public inputValue$ = new Subject<string>();

  public keyUp = this.inputValue$.pipe(
    takeUntil(this.destroy$),
    filter(text => !! text),
    filter(value => value.length > 3),
    distinctUntilChanged(),
    debounceTime(700),
  )
  .subscribe({
    next: (data) => {this.dataCourseService.SearchCourseItem(data); }
    });
}
