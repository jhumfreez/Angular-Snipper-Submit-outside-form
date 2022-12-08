import { Injectable } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { ButtonState, TaskType } from './types';

@Injectable({ providedIn: 'root' })
export class NavButtonStateService {
  prevTask: TaskType;
  currentTask: TaskType;
  advanceButtonState: ButtonState;
  _state$: BehaviorSubject<ButtonState>;
  get state$(): Observable<ButtonState> {
    return this._state$ as Observable<ButtonState>;
  }
  constructor(router: Router) {
    router.events.subscribe((navEvent) => {
      if (navEvent instanceof NavigationStart) {
        const task = router.routerState.root.data['taskType'];
        if (task) {
          this.advance(task);
        }
      }
    });
    this.currentTask = TaskType.PAGE_ONE;
    this._state$ = new BehaviorSubject<ButtonState>({
      isSubmit: false,
      disabled: false,
    });
  }

  advance(nextTask: TaskType) {
    switch (nextTask) {
      case TaskType.PAGE_ONE:
        this.updateNavButtonState({
          isSubmit: false,
          disabled: false,
        });
        // console.log('handling advance task for', TaskType.PAGE_ONE);
        break;
      case TaskType.PAGE_TWO:
        this.updateNavButtonState({
          isSubmit: true,
          disabled: false,
        });
        // console.log('handling advance task for', TaskType.PAGE_TWO);
        break;
      default:
        return;
    }
    this.cycleTasks(nextTask);
  }

  private cycleTasks(nextTask: TaskType) {
    this.prevTask = this.currentTask;
    this.currentTask = nextTask;
  }

  private updateNavButtonState(state: ButtonState) {
    this.advanceButtonState = state;
    this._state$.next(state);
  }
}
