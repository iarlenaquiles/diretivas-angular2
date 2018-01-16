import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[Highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver () {
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave () {
    this.backgroundColor = 'white';
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor() { }

}
