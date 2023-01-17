import { Injectable } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
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
      // if(navEvent instanceof NavigationEnd){
      //   console.log('data:',router.routerState.root.data)
      // }
      // TODO: Call advance at a more appropriate step
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
        this.setupPageOne();
        // console.log('handling advance task for', TaskType.PAGE_ONE);
        break;
      case TaskType.PAGE_TWO:
        this.setupPageTwo();
        // console.log('handling advance task for', TaskType.PAGE_TWO);
        break;
      default:
        return;
    }
    this.cycleTasks(nextTask);
  }

  private setupPageOne() {
    this.setNextState(
      {
        isSubmit: false,
        disabled: false,
      },
      {
        disabled: false,
        hidden: true,
      }
    );
  }

  private setupPageTwo() {
    this.setNextState(
      {
        isSubmit: true,
        disabled: false,
      },
      {
        disabled: false,
        hidden: false,
      }
    );
  }

  private cycleTasks(nextTask: TaskType) {
    this.prevTask = this.currentTask;
    this.currentTask = nextTask;
  }

  private setNextState(advState: ButtonState, prevState: PrevButtonState) {
    this.assignAdvState(advState);
    this.assignPrevState(prevState);
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
