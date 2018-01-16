import { Directive, HostListener, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[HighlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOvrt () {
    this.renderer.setElementStyle(this.elementRef.nativeElement,
    'background-color', 'yellow');
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer) { }

}
