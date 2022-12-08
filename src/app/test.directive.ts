import { Directive, ElementRef, HostListener } from '@angular/core';

/**
 * This is just for demo purposes
 */

@Directive({
  selector: '[appTest]',
})
export class TestDirective {
  @HostListener('submit', ['$event'])
  test(event: SubmitEvent) {
    console.log('form submit event acknowledged', event);
  }
  constructor(private el: ElementRef) {}
}
