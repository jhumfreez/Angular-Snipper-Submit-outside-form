import { Directive, ElementRef, HostListener } from '@angular/core';

/**
 * This is just a test
 */

@Directive({
  selector: '[appSubmitter]',
})
export class SubmitterDirective {
  @HostListener('submit', ['$event'])
  test(event: SubmitEvent) {
    console.log('submit acknowledged at the form', event);
    (this.el.nativeElement as HTMLFormElement).requestSubmit();
  }
  constructor(private el: ElementRef) {}
}
