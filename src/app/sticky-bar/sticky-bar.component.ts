import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavButtonStateService } from '../nav-button-state.service';
import { TaskType } from '../types';

@Component({
  selector: 'app-sticky-bar',
  templateUrl: './sticky-bar.component.html',
  styleUrls: ['./sticky-bar.component.css'],
})
export class StickyBarComponent implements OnInit {
  constructor(
    private router: Router,
    public navBtnService: NavButtonStateService
  ) {}

  ngOnInit() {}

  advance() {
    this.router.navigate([this.getNextTask()]);
    // FIXME: Shouldn't need this
    this.navBtnService.advance(this.getNextTask());
  }

  previous() {
    this.advance();
  }

  // For demo
  private getNextTask() {
    return this.navBtnService.currentTask === TaskType.PAGE_ONE
      ? TaskType.PAGE_TWO
      : TaskType.PAGE_ONE;
  }
}
