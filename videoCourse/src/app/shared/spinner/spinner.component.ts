import { Component } from '@angular/core';
import { LoaderService } from '../../core/services/loader.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  constructor(private loaderService: LoaderService){}
  isLoading: Subject<boolean> = this.loaderService.isLoading;
}
