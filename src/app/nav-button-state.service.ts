import { Injectable } from '@angular/core';
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
  constructor() {
    this.currentTask = TaskType.PAGE_ONE;
    this._state$ = new BehaviorSubject<ButtonState>({
      isSubmit: false,
      disabled: false,
    });
  }

  advance(nextTask: TaskType) {
    switch (this.currentTask) {
      case TaskType.PAGE_ONE:
        this.updateNavButtonState({
          isSubmit: false,
          disabled: false,
        });
        // console.log('handling advance task for', TaskType.PAGE_ONE);
        break;
      case TaskType.PAGE_TWO:
        console.log('test');
        this.updateNavButtonState({
          isSubmit: true,
          disabled: false,
        });
        // console.log('handling advance task for', TaskType.PAGE_TWO);
        break;
    }
    this.cycleTasks(nextTask);
  }

  previous(nextTask: TaskType) {
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

  // Simplifying task-assignment/router-relationship for demo purposes
  // updateTask(newTask: TaskType) {
  //   this.currentTask = newTask;
  // }
}
