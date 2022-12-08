import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'button[appSubmit]',
})
export class SubmitDirective {
  /**
   * Q: What's happening?
   * A: This direct applies to buttons of type "Submit". Natively, the submit button is associated
   * with a form with a matching id. So, before the submit event occurs, the id is assigned to
   * the first form on the page. See console output.
   */

  @HostListener('click')
  submit() {
    console.log('click acknowledged');
    const elem = document.querySelector('form');
    (this.el.nativeElement as HTMLElement).setAttribute('form', elem.id);
  }

  constructor(private el: ElementRef) {}
}
