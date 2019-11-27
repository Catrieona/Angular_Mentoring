import { Component, OnChanges, Input, OnInit } from '@angular/core';
import { DataCourseService } from '../../data-course.service';


@Component({
  selector: 'app-confirmation-del-item',
  templateUrl: './confirmation-del-item.component.html',
  styleUrls: ['./confirmation-del-item.component.scss']
})
export class ConfirmationDelItemComponent {

  @Input() itemDelId: number;

  constructor (private dataCourseService: DataCourseService) {}

  public deliteItem () {
    this.dataCourseService.removeItem(this.itemDelId);
    this.dataCourseService.showConfirmMessage=false;
  }
}
