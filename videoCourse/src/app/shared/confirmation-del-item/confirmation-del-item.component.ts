import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { DataCourseService } from '../../core/services/data-course.service';
import { deleteCourse } from "../../store/actions/loadCourse.action";
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-confirmation-del-item',
  templateUrl: './confirmation-del-item.component.html',
  styleUrls: ['./confirmation-del-item.component.scss'],
})
export class ConfirmationDelItemComponent {
  @Input() itemDelId: number;

  constructor(private dataCourseService: DataCourseService,   private store: Store<any>) {}

  public deliteItem() {
    let id = this.itemDelId
    this.store.dispatch(deleteCourse({id}));
    this.hideConfirmMessage()
  }

  public hideConfirmMessage() {
    this.dataCourseService.showConfirmMessage = false;
  }
}
