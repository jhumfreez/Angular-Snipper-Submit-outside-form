import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ExampleComponent } from './example/example.component';
import { StickyBarComponent } from './sticky-bar/sticky-bar.component';
import { SubmitDirective } from './submit.directive';
import { TestDirective } from './test.directive';
import { Route } from '@angular/router';
import { SubmitterDirective } from './submitter.directive';

const routes: Route[] = [
  {
    path: '',
    component: AppComponent,
    // children
  },
];

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ExampleComponent,
    StickyBarComponent,
    SubmitDirective,
    TestDirective,SubmitterDirective
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
