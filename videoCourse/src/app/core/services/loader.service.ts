import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isLoading = new Subject<boolean>();
  show() {
      this.isLoading.next(true);
      console.log(this.isLoading);
  }
  hide() {
    setTimeout( () =>
      this.isLoading.next(false), 1500);
  }

}
