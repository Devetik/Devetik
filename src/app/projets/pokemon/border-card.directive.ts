import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmBorderCard]'
})
export class BorderCardDirective {

  constructor(private el: ElementRef) {
      this.setHeight(455);
      this.setBorder('#B6B6B6');
  }

  @Input('pkmBorderCard') borderColor: string | undefined; //alias

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || '#9EFFF3');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#B6B6B6');
  }

  setHeight(height: number){
    this.el.nativeElement.style.height = `${height}px`;
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 5px ${color}`;
  }

}
