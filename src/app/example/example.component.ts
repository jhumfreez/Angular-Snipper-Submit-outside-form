import {
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubmissionContent } from '../types';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
})
export class ExampleComponent implements OnInit {
  @Output() submitForm: EventEmitter<SubmissionContent>;

  myForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      name: fb.control('', [Validators.required]),
      dob: fb.control(new Date())
    });
    this.submitForm = new EventEmitter<SubmissionContent>();
  }

  ngOnInit() {}

  onSubmit() {
    this.submitForm.emit(this.myForm.value);
  }
}
