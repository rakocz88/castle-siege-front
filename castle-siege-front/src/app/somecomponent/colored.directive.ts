import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appColored]'
})
export class ColoredDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.color = 'red';
    console.log(element.nativeElement);
    element.nativeElement.innerhtml = 'Gryzon';
  }

  @HostListener('click') clickedItem() {
    alert('You clicked the item');
  }

  @HostListener('document:click', ['$event']) mouseMOve(elem) {
    console.log('clicked', elem);
  }



}
