import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { SubmissionContent, TaskType } from '../types';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
})
export class ExampleComponent {
  @Output() submitForm: EventEmitter<SubmissionContent>;

  // Re-used the form across pages out of laziness
  showAltForm = false;

  myForm: FormGroup;
  constructor(fb: FormBuilder, private route: ActivatedRoute) {
    // This is just for re-using the form (and to show something kinda neat about route data)
    this.adjustForm();

    this.myForm = fb.group({
      name: fb.control('', [Validators.required]),
      dob: fb.control(new Date()),
      id: fb.control('', [Validators.required]),
    });
    this.submitForm = new EventEmitter<SubmissionContent>();
  }

  onSubmit() {
    console.log(
      '[Confirmation] form submit locally acknowledged',
      this.myForm.value
    );
    // Not used at the moment.
    this.submitForm.emit(this.myForm.value);
  }

  // #region demo stuff
  adjustForm() {
    this.route.data.subscribe((d) => {
      this.showAltForm = d.taskType === TaskType.PAGE_TWO;
    });
  }
  // #endregion demo stuff
}
