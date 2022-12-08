import { Injectable } from '@angular/core';
import { TaskType } from './types';

@Injectable({ providedIn: 'root' })
export class NavButtonStateService {
  currentTask: TaskType;
  constructor() {
    this.currentTask = TaskType.PAGE_ONE;
  }

  advance() {
    switch (this.currentTask) {
      case TaskType.PAGE_ONE:
        console.log('handling advance task for', TaskType.PAGE_ONE);
        break;
      case TaskType.PAGE_TWO:
        console.log('handling advance task for', TaskType.PAGE_TWO);
        break;
    }
  }

  updateNavButtonState() {
    return;
  }

  // Simplifying task-assignment/router-relationship for demo purposes
  updateTask(newTask: TaskType) {
    this.currentTask = newTask;
  }
}
