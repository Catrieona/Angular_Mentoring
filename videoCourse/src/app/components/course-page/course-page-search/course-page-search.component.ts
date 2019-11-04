import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-page-search',
  templateUrl: './course-page-search.component.html',
  styleUrls: ['./course-page-search.component.scss']
})
export class CoursePageSearchComponent {
  public userInutValue: string;
  
  constructor() { }
 
  getUserValue(value: string) {
    this.userInutValue=value;
    console.log(this.userInutValue)

  }


}
