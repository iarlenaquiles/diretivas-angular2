import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[HighlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver () {
    // this.renderer.setElementStyle(this.elementRef.nativeElement,
    // 'background-color', 'yellow');
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave () {
    // this.renderer.setElementStyle(this.elementRef.nativeElement,
    // 'background-color', 'white');
    this.backgroundColor = 'white';
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(
    // private elementRef: ElementRef, private renderer: Renderer
  ) { }

}
