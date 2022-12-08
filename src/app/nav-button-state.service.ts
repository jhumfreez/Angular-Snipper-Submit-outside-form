import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { ButtonState, TaskType, PrevButtonState } from './types';

@Injectable({ providedIn: 'root' })
export class NavButtonStateService {
  prevTask: TaskType;
  currentTask: TaskType;

  advanceButtonState: ButtonState;
  _advState$: BehaviorSubject<ButtonState>;
  get advState$(): Observable<ButtonState> {
    return this._advState$ as Observable<ButtonState>;
  }

  prevButtonState: PrevButtonState;
  _prevState$: BehaviorSubject<PrevButtonState>;
  get prevState$(): Observable<PrevButtonState> {
    return this._prevState$ as Observable<PrevButtonState>;
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
    this._advState$ = new BehaviorSubject<ButtonState>({
      isSubmit: false,
      disabled: false,
    });
    this._prevState$ = new BehaviorSubject<PrevButtonState>({
      hidden: true,
      disabled: false,
    });
  }

  advance(nextTask: TaskType) {
    switch (nextTask) {
      case TaskType.PAGE_ONE:
        this.assignAdvState({
          isSubmit: false,
          disabled: false,
        });
        this.assignPrevState({
          disabled: false,
          hidden: true,
        });
        // console.log('handling advance task for', TaskType.PAGE_ONE);
        break;
      case TaskType.PAGE_TWO:
        this.assignAdvState({
          isSubmit: true,
          disabled: false,
        });
        this.assignPrevState({
          disabled: false,
          hidden: false,
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

  private assignAdvState(advState: ButtonState) {
    this.advanceButtonState = advState;
    this._advState$.next(advState);
  }

  private assignPrevState(prevState: PrevButtonState) {
    this.prevButtonState = prevState;
    this._prevState$.next(prevState);
  }
}
