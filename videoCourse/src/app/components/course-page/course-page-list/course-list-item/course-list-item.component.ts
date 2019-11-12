import { Component, Output, Input, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.scss']
})
export class CourseListItemComponent {
  @Input() courseData: Array<{id: number, title: string, description: string, duration:string, date:string, topRated: boolean;}>;
  @Output() onDeleteCourseItem = new EventEmitter<number>();

  // @ViewChild ('creationDate', {static: false})
  // creationDate: ElementRef;

  // ngAfterViewInit() {
  //   this.creationDate=this.creationDate.nativeElement.textContent;
  //   console.log(this.creationDate)

  // }
  
  public deleteCourseItem(id:number) {
    this.onDeleteCourseItem.emit(id);
  }
}
