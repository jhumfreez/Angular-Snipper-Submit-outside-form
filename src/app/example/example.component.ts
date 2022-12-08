import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { SubmissionContent, TaskType } from '../types';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
})
export class ExampleComponent implements OnInit {
  @Output() submitForm: EventEmitter<SubmissionContent>;

  showAltForm = false;

  myForm: FormGroup;
  constructor(fb: FormBuilder, private route: ActivatedRoute) {
    this.adjustForm();

    this.myForm = fb.group({
      name: fb.control('', [Validators.required]),
      dob: fb.control(new Date()),
      id: fb.control('', [Validators.minLength(3)])
    });
    this.submitForm = new EventEmitter<SubmissionContent>();
  }

  ngOnInit() {}

  onSubmit() {
    console.log('form submit locally acknowledged');
    this.submitForm.emit(this.myForm.value);
  }

  // #region demo stuff
  adjustForm(){
    const currentTask = this.route.snapshot.data.taskType;
    this.showAltForm = currentTask === TaskType.PAGE_TWO;
  }
  // #endregion demo stuff
}
