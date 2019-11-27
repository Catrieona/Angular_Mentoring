import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-course-page-search',
  templateUrl: './course-page-search.component.html',
  styleUrls: ['./course-page-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class CoursePageSearchComponent {
  public userInutValue: string;

 public getUserValue(value: string) {
    this.userInutValue = value;
    console.log(this.userInutValue);
  }
}
