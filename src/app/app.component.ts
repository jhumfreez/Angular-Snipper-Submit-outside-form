import { Component, VERSION } from '@angular/core';
import { SubmissionContent } from './types';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  handleSubmission($event: SubmissionContent){
    console.log('submitting form:',$event);
  }
}
