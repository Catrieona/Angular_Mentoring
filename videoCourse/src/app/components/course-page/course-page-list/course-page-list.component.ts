import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ElementData } from '../dataCourse';


@Component({
  selector: 'app-course-page-list',
  templateUrl: './course-page-list.component.html',
  styleUrls: ['./course-page-list.component.scss']
})
export class CoursePageListComponent implements OnInit {

 public data = new ElementData();
 public courseData: Array<object>;


ngOnInit() {
  this. courseData = this.data.dataCourse;
}

public deleteCourseItem(id: string) {
    this.data.deleteItem(id);
  }
}
