import { Component, Output, Input, EventEmitter, OnInit} from '@angular/core';
import { DataCourseService } from '../../../../core/services/data-course.service';
import {PageListData} from '../../../../core/models/page-list-data';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.scss'],
})
export class CourseListItemComponent implements OnInit {
  @Input() courseState: string;
  @Output() onDeleteCourseItem = new EventEmitter<number>();
  public courseData: PageListData [];
  public id: number;

constructor(private dataCourseService: DataCourseService,
            private activateRoute: ActivatedRoute) {
            this.id = activateRoute.snapshot.params.id;
          }




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
