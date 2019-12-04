import { Component, OnInit } from '@angular/core';
import { PageListData } from 'src/app/core/models/page-list-data';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute} from '@angular/router';
import { DataCourseService } from '../../core/services/data-course.service';



@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {
  public id: number;
  public course: PageListData;

  constructor(
    private route: ActivatedRoute,
    private dataCourseService: DataCourseService
    ) {
  }

  ngOnInit() {
    this.route.paramMap.pipe(
        switchMap(params => params.get('id'))
    )
    .subscribe(data => this.id = + data);
    this.getCourse();
  }


  getCourse() {
    this.dataCourseService.getCourseItem(this.id);
    this.course = this.dataCourseService.course;
    console.log(this.course);
  }

  saveCourseDate() {
    
  }

}
