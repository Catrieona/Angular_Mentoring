import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.scss']
})
export class CourseListItemComponent {
  @Input() courseData: Array<Object>;
  @Output() onDeleteCourseItem = new EventEmitter<number>();

  public deleteCourseItem(id:number) {
    this.onDeleteCourseItem.emit(id);
  }
}
