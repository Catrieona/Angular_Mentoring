import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appItemBorderStyle]'
})
export class ItemBorderStyleDirective implements OnInit {
  @Input() creationDate;
  public currentDate =  new Date('2019-11-12');
  
  constructor(
    private renderer: Renderer2,
    private el: ElementRef
    ) {
  }

  ngOnInit() {

this.currentDate.getDate();

if (
        (this.creationDate.valueOf() < this.currentDate.valueOf()) && 
        (this.creationDate.valueOf() >= (this.currentDate.valueOf() - 1209600000))
      ) {
        this.renderer.setStyle(
          this.el.nativeElement,
          'border',
          '3px solid #0c8a1f'
        );

      } else if (
        this.creationDate.valueOf() > this.currentDate.valueOf()
      ) {
        this.renderer.setStyle(
          this.el.nativeElement,
          'border',
          '3px solid #006bb8'
        );
      }
    }
}

