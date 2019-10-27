import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ElementData } from "../dataCourse"


@Component({
  selector: 'app-course-page-list',
  templateUrl: './course-page-list.component.html',
  styleUrls: ['./course-page-list.component.scss']
})
export class CoursePageListComponent {

 public data = new ElementData();
 public courseData=this.data.dataCourse;

  constructor() {
  }

  deleteCourseItem(id:string) {
    this.data.deleteItem(id)
  }
  
}
