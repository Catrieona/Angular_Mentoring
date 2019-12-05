import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appItemBorderStyle]'
})
export class ItemBorderStyleDirective implements OnInit {
  @Input() creationDate;
  public currentDate =  new Date('2019-11-12');
  public twoWeekTerm = 14 * 24 * 60 * 60 *  1000;
  public creationDay: number;
  public currentDay: number;

  constructor(
    private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {

  this.currentDate.getDate();
  this.creationDay = this.creationDate.valueOf();
  this.currentDay = this.currentDate.valueOf();

  if (
      (this.creationDay < this.currentDay) &&
      (this.creationDay >= (this.currentDay - this.twoWeekTerm))
    ) {
        this.renderer.setStyle(
        this.el.nativeElement,
        'border',
        '3px solid #0c8a1f'
        );
      } else if (
          this.creationDay > this.currentDay
        ) {
          this.renderer.setStyle(
          this.el.nativeElement,
          'border',
          '3px solid #006bb8'
        );
      }
  }
}

