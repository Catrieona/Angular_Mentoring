import { Component, OnInit,  ChangeDetectorRef } from '@angular/core';
import { PageListData } from 'src/app/core/models/page-list-data';
import { ActivatedRoute} from '@angular/router';
import { DataCourseService } from '../../core/services/data-course.service';


@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {
  public dataCourse;
  id: number;
  public editCourseItem: PageListData;

  constructor(
    private route: ActivatedRoute,
    private dataCourseService: DataCourseService,
    private cdRef: ChangeDetectorRef
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
      console.log(this.dataCourse);
    });
  }

  saveCourseDate(id: number) {

    console.log(this.dataCourse);
  }
}
