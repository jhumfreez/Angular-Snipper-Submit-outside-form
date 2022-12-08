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
    console.log('submit acknowledged', event);
  }
  constructor(private el: ElementRef) {}
}
