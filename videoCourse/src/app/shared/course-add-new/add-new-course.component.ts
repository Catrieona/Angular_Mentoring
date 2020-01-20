import { Component } from '@angular/core';
import { PageListData } from '../../core/models/page-list-data';
import { DataCourseService } from '../../core/services/data-course.service';
import { addNewCourse } from "../../store/actions/loadCourse.action";
import { Store} from '@ngrx/store';

@Component({
  selector: 'app-add-new-course',
  templateUrl: './add-new-course.component.html',
  styleUrls: ['./add-new-course.component.scss']
})
export class AddNewCourseComponent {
  constructor(private dataCourseService: DataCourseService,
    private store: Store<any>
    ) {}
  public courseId;

  public newCourseItem: Partial<PageListData> = {};

  public addNewCourseItem() {
    this.store.dispatch(addNewCourse({newCourseItem: this.newCourseItem}));
  }

}
