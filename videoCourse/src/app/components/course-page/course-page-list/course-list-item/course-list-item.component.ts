import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.scss']
})
export class CourseListItemComponent {
  @Input() courseData: Array<{id: number, title: string, description: string, duration: string, date: Date, topRated: boolean}>;
  @Output() onDeleteCourseItem = new EventEmitter<number>();
  @Input() courseState: string;
 
  public deleteCourseItem(id: number) {
    this.onDeleteCourseItem.emit(id);
    console.log(this.courseState);
  }
}
