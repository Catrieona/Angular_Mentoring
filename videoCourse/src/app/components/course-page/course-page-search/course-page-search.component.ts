import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataCourseService } from '../../../core/services/data-course.service';

@Component({
  selector: 'app-course-page-search',
  templateUrl: './course-page-search.component.html',
  styleUrls: ['./course-page-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class CoursePageSearchComponent {
  constructor (private dataCourseService: DataCourseService) {}
  public userInutValue: string;
  
 public getUserValue(value: string) {
    this.userInutValue = value;
    this.dataCourseService.SearchCourseItem(this.userInutValue)
    .subscribe(data => console.log(data));
 }
}
