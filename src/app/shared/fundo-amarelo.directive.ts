import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[FundoAmarelo]' //colocar a tag na frente para definir exclusividade ex.: p[FundoAmarelo]
})
export class FundoAmareloDirective {

  constructor(private elementRef: ElementRef) {
    //console.log(this.elementRef);
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }

}
