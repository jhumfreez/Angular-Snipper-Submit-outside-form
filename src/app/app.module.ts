import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ExampleComponent } from './example/example.component';
import { StickyBarComponent } from './sticky-bar/sticky-bar.component';
import { SubmitDirective } from './submit.directive';
import { TestDirective } from './test.directive';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ExampleComponent,
    StickyBarComponent,
    SubmitDirective,
    TestDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
