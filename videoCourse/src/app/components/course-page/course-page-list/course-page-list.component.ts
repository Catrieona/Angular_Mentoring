import { Component, OnInit, } from '@angular/core';
import { ElementData } from '../dataCourse';


@Component({
  selector: 'app-course-page-list',
  templateUrl: './course-page-list.component.html',
  styleUrls: ['./course-page-list.component.scss']
})
export class CoursePageListComponent implements OnInit {

 public data = new ElementData();
 public courseData: Array<{id: number, title: string, description: string, duration: string, date: object, topRated: boolean}>;


ngOnInit() {
  this.courseData = this.data.dataCourse;
}

public onDeleteCourseItem(id: number) {
    this.data.deleteItem(id);
  }
}
