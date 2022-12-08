import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ButtonState, TaskType } from './types';

@Injectable({ providedIn: 'root' })
export class NavButtonStateService {
  currentTask: TaskType;
  advanceButtonState: ButtonState;
  _state$: BehaviorSubject<ButtonState>;
  get state$()
  {
    return this._state$.asObservable();
  }
  constructor() {
    this.currentTask = TaskType.PAGE_ONE;
    this._state$ = new BehaviorSubject<ButtonState>({isSubmit:false, disabled: false});
  }

  advance() {
    switch (this.currentTask) {
      case TaskType.PAGE_ONE:
        this.updateNavButtonState({
          isSubmit: false,
          disabled: false
        });
        console.log('handling advance task for', TaskType.PAGE_ONE);
        break;
      case TaskType.PAGE_TWO:
        this.updateNavButtonState({
          isSubmit: true,
          disabled: false
        });
        console.log('handling advance task for', TaskType.PAGE_TWO);
        break;
    }
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
