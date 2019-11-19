import { Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-course-page-list',
  templateUrl: './course-page-list.component.html',
  styleUrls: ['./course-page-list.component.scss']
})
export class CoursePageListComponent  {

  public confirmMessage: boolean;
  public itemDelId;

  public onDeleteCourseItem(id: number) {
    this.confirmMessage = true;
    this.itemDelId = id;
  }

}
