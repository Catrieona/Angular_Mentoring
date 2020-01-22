import { Component, OnInit,  ChangeDetectorRef, ɵConsole } from '@angular/core';
import { PageListData } from 'src/app/core/models/page-list-data';
import { ActivatedRoute} from '@angular/router';
import { DataCourseService } from '../../core/services/data-course.service';
import { Store} from '@ngrx/store';
import { editCourse } from "../../store/actions/loadCourse.action";


@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {
  public dataCourse;
  public id: number;
  public editCourseItem: PageListData;

  constructor(
    private route: ActivatedRoute,
    private dataCourseService: DataCourseService,
    private cdRef: ChangeDetectorRef,
    private store: Store<any>
    ) {
  }

 public ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.getCourse();
  }

  public getCourse() {
    this.dataCourseService.getCourseItem(this.id)
    .subscribe ((dataCourse: PageListData[]) => {
      this.dataCourse = dataCourse;
      this.cdRef.markForCheck();
    });
  }

  editCourseDate() {
    // this.dataCourseService.editCourseItem(this.id, this.dataCourse)
    // .subscribe(() => this.dataCourseService.getItemList());
    this.store.dispatch(editCourse({id: this.id, dataCourse: this.dataCourse}));

  }
}
