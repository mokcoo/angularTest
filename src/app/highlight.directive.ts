import { Directive, ElementRef, Input, OnChanges } from '@angular/core';


@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {


  defaultColor =  'rgb(211, 211, 211)';

  @Input('highlight') bgColor = '';

  constructor(private el: ElementRef) {
    el.nativeElement.style.customProperty = true;
  }

  ngOnChanges() {
    this.el.nativeElement.style.backgroundColor = this.bgColor || this.defaultColor;
  }
}
