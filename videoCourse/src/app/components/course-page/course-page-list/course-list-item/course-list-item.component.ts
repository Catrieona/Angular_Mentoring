import { Component, Output, Input, EventEmitter, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { DataCourseService } from '../../../../core/services/data-course.service';
import { PageListData } from '../../../../core/models/page-list-data';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseListItemComponent implements OnInit {
  @Input() courseState: string;
  @Output() onDeleteCourseItem = new EventEmitter<number>();

  public courseData;
  private id: number;
  public dataCourse;

constructor(private dataCourseService: DataCourseService, private httpClient: HttpClient, private cdRef: ChangeDetectorRef
          ) {
  }

  ngOnInit() {
    this.getDataCourse();
  }

  public getDataCourse(): void {
  this.dataCourseService.getItemList()
  this.dataCourseService.courses$
    .subscribe ((dataCourse: PageListData[]) => {
      this.dataCourse = dataCourse;
      this.cdRef.markForCheck();
    });
  }

  public deleteCourseItem(id: number) {
    this.onDeleteCourseItem.emit(id);
    this.getDataCourse();
  }


  public loadMoreCourses() {
  this.dataCourseService.onLoadMoreCourses();
  }


}
