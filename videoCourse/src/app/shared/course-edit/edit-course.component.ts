import { Component } from '@angular/core';
import { PageListData } from 'src/app/core/models/page-list-data';


@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent {

public course: PageListData;
}
