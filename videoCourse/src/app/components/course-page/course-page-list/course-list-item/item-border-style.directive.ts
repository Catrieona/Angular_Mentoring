import { Directive, ElementRef, Renderer2, Input, AfterViewInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[appItemBorderStyle]'
})
export class ItemBorderStyleDirective {
  @Input() creationDate
  public curentDate =  new Date('2019-11-12')

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
    ) { 
      
  }

  ngOnInit() {
    this.curentDate.getDate()
    if (this.curentDate.valueOf()/1000/60/60/24 < this.creationDate.valueOf()/1000/60/60/24 && this.curentDate.valueOf()/1000/60/60/24 >= this.curentDate.valueOf()/1000/60/60/24 - 14) {
      this.renderer.setStyle(
        this.el.nativeElement,
        'border',
        '2px dashed olive'
      );
    }else if (this.curentDate.valueOf()/1000/60/60/24 > this.creationDate.valueOf()/1000/60/60/24) {
        this.renderer.setStyle(
          this.el.nativeElement,
          'border',
          '2px dashed blue'
        );
    } else {
      this.renderer.setStyle(
        this.el.nativeElement,
        'border',
        '2px dashed red'
      );
    }
    



    
  }

}
