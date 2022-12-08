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
   * So, one option is to match the button id to the form before submit is registered.
   * This is probably super unclear though (and may depend on browser implementation).
   * 
   * An alternative is getting the form element and call the native requestSubmit
   *
   * resoures:
   * - https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/requestSubmit
   * - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes
   *
   * See console output.
   */

  @HostListener('click')
  submit() {
    console.log('[Button] click acknowledged at directive');
    const elem = document.querySelector('form');
    if (elem) {
      // (this.el.nativeElement as HTMLElement).setAttribute('form', elem.id);
      (elem as HTMLFormElement).requestSubmit();
    }
  }

  constructor(private el: ElementRef) {}
}
