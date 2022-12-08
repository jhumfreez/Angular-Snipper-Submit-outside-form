import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'button[appSubmit]',
})
export class SubmitDirective {
  /**
   * Q: What's happening?
   * A: This direct applies to buttons of type "Submit". Natively, the submit button is
   * associated with a form with a matching id.
   *
   * So, one option is to match the button id to the form. This is probably
   * super unclear though.
   * An alternative is getting the form element and call the native requestSubmit
   *
   * See console output.
   */

  @HostListener('click')
  submit() {
    console.log('click acknowledged');
    const elem = document.querySelector('form');
    if (elem) {
      // (this.el.nativeElement as HTMLElement).setAttribute('form', elem.id);
      (elem as HTMLFormElement).requestSubmit();
    }
  }

  constructor(private el: ElementRef) {}
}
