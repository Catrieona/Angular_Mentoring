import { Component } from '@angular/core';
import { PageListData } from '../../core/models/page-list-data';
import { DataCourseService } from '../../core/services/data-course.service';

@Component({
  selector: 'app-add-new-course',
  templateUrl: './add-new-course.component.html',
  styleUrls: ['./add-new-course.component.scss']
})
export class AddNewCourseComponent {
  constructor(private dataCourseService: DataCourseService,
    ) {}
  public courseId;

  public newCourseItem: PageListData =
    {
      id: this.courseId,
      name: 'name',
      date: 'date',
      istopRated: false,
      description: 'description',
      authors: [{
          id: 0,
          name: 'name',
          lastName: 'lastname'
      }],
      length: 0,
  };

  public addNewCourseItem() {
    this.getCourseId(100, 500);
    this.dataCourseService.saveNewItem(this.newCourseItem)
    .subscribe(data => console.log(data));
  }

  public getCourseId(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return this.courseId = Math.round(rand);
  }

}
