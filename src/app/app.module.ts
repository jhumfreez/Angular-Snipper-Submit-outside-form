import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ExampleComponent } from './example/example.component';
import { StickyBarComponent } from './sticky-bar/sticky-bar.component';
import { SubmitDirective } from './submit.directive';
import { TestDirective } from './test.directive';
import { RouterModule, Routes } from '@angular/router';
import { TaskType } from './types';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'page-1',
        component: ExampleComponent,
        data: { taskType: TaskType.PAGE_ONE }
      },
      {
        path: 'page-2',
        component: ExampleComponent,
        data: { taskType: TaskType.PAGE_TWO }
      },
    ],
  },
];

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, RouterModule.forRoot(routes)],
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
