import { Component, Output, Input, EventEmitter, OnInit,  ChangeDetectionStrategy } from '@angular/core';
import { DataCourseService } from '../../../../core/services/data-course.service';
import {PageListData} from '../../../../core/models/page-list-data';


@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseListItemComponent implements OnInit {
  @Input() courseState: string;
  @Output() onDeleteCourseItem = new EventEmitter<number>();
  public courseData: PageListData [];

constructor(private dataCourseService: DataCourseService) { }

  ngOnInit() {
    this.getDataCourse();
  }

  public getDataCourse() {
    this.courseData = this.dataCourseService.getItemList();
  }

  public deleteCourseItem(id: number) {
    this.onDeleteCourseItem.emit(id);
    this.getDataCourse();
  }
}
