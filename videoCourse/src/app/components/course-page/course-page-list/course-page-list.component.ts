import { Component, ChangeDetectionStrategy} from '@angular/core';
import { DataCourseService } from "../../../core/services/data-course.service";

@Component({
  selector: 'app-course-page-list',
  templateUrl: './course-page-list.component.html',
  styleUrls: ['./course-page-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursePageListComponent  {

  constructor(private dataCourseService: DataCourseService) { }

  public itemDelId: number;

  public onDeleteCourseItem(id: number) {
    this.dataCourseService.showConfirmMessage=true;
    this.itemDelId = id;
  }

}
