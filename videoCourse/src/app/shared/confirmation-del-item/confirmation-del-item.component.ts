import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { DataCourseService } from '../../core/services/data-course.service';
import { Store, select } from '@ngrx/store';
import { deleteCourse } from "../../store/actions/loadCourse.action"


@Component({
  selector: 'app-confirmation-del-item',
  templateUrl: './confirmation-del-item.component.html',
  styleUrls: ['./confirmation-del-item.component.scss'],
})
export class ConfirmationDelItemComponent {
  @Input() itemDelId;

  constructor(private dataCourseService: DataCourseService,  private store: Store<any>) {}

  public deliteItem() {
    this.store.dispatch(deleteCourse({id :this.itemDelId}));
    // this.dataCourseService.removeItem(this.itemDelId)
    // .subscribe(() => this.dataCourseService.getItemList());
    this.dataCourseService.showConfirmMessage = false;
    
  }

  public hideConfirmMessage() {
    this.dataCourseService.showConfirmMessage = false;
  }
}
