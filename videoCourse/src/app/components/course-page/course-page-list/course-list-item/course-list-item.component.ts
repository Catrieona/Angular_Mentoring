import { Component, Output, Input, EventEmitter, OnInit,  DoCheck } from '@angular/core';
import { DataCourseService } from '../../data-course.service';
import {PageListData} from '../../../models/page-list-data';


@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.scss']
})
export class CourseListItemComponent implements OnInit,  DoCheck {
  @Input() courseState: string;
  @Output() onDeleteCourseItem = new EventEmitter<number>();
  public courseData: PageListData [];

constructor(private dataCourseService: DataCourseService) { }

ngOnInit() {
  this.getDataCourse();
}

ngDoCheck () {
  this.courseData = this.dataCourseService.getItemList();

}

getDataCourse() {
  this.courseData = this.dataCourseService.getItemList();
  console.log(this.courseData);
}


public deleteCourseItem(id: number) {
    this.onDeleteCourseItem.emit(id);
}
}
