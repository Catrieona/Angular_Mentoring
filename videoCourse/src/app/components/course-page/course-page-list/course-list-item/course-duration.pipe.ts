import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'courseDuration'
})
export class CourseDurationPipe implements PipeTransform {

  transform(value: number): string {
    if(value >= 60) {
      return `${value/60|0}h ${value%60}m`;
    } else {
      return `${value}min`;
    }
  }
}
