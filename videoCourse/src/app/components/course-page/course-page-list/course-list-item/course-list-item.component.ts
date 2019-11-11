import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.scss']
})
export class CourseListItemComponent {
  @Input() courseData: Array<Object>;
  @Output() ondeleteCourseItem = new EventEmitter<string>();

  public deleteCourseItem(id:any) {
    this.ondeleteCourseItem.emit(id);
  }
}
