import { Directive, HostListener, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[HighlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOvrt () {

  }

  constructor() { }

}
