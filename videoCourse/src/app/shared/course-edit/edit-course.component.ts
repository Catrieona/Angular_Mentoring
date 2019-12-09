import { Component, OnInit } from '@angular/core';
import { PageListData } from 'src/app/core/models/page-list-data';
import { ActivatedRoute} from '@angular/router';
import { DataCourseService } from '../../core/services/data-course.service';



@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {
  public course: PageListData;
  id: number;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private dataCourseService: DataCourseService
    ) {
  }

 public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
    this.id = +params.id;
    this.getCourse();
    });
  }

  public getCourse() {
    // this.dataCourseService.getCourseItem(this.id);
    // this.course = this.dataCourseService.course;
  }

  saveCourseDate() {
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
