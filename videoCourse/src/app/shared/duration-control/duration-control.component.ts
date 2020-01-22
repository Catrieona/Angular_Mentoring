import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-duration-control',
  templateUrl: './duration-control.component.html',
  styleUrls: ['./duration-control.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() =>  DurationControlComponent),
    multi: true,
  }],
})
export class DurationControlComponent implements ControlValueAccessor {

@Input('value') val: number;

public updatedCourseDuration;

  onChange: any = () => { };
  onTouched: any = () => { };

  get value() {
    if(!this.val){
      this.val = 0;
    }
    return this.val;
  }

  set value(val) {
    this.val = val;
    this.onChange(val);
    this.onTouched();
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  writeValue(value) {
    if (value) {
      this.value = value;
    }
  }

}



