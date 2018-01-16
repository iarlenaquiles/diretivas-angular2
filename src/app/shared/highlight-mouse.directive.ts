import { Directive, HostListener, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[HighlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver () {
    this.renderer.setElementStyle(this.elementRef.nativeElement,
    'background-color', 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave () {
    this.renderer.setElementStyle(this.elementRef.nativeElement,
    'background-color', 'white');
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer) { }

}
