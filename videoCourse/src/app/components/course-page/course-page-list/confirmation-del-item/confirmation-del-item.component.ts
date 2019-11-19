import { Component, OnInit, Input } from '@angular/core';
import { DataCourseService } from '../../data-course.service';

@Component({
  selector: 'app-confirmation-del-item',
  templateUrl: './confirmation-del-item.component.html',
  styleUrls: ['./confirmation-del-item.component.scss']
})
export class ConfirmationDelItemComponent {

  @Input() showConfirmEl: boolean;
  @Input() itemDelId: number;

  constructor (private dataCourseService: DataCourseService) {}

  public deliteItem () {
    this.dataCourseService.removeItem(this.itemDelId);
    this.showConfirmEl = false;
  }

}
