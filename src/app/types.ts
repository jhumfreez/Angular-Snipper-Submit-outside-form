export interface SubmissionContent {
  name: string;
  dob: string;
}

export enum TaskType {
  PAGE_ONE = 'page-1',
  PAGE_TWO = 'page-2',
}

export interface ButtonState {
  isSubmit: boolean;
  disabled: boolean;
  hidden?: boolean;
}

export type PrevButtonState = Required<Omit<ButtonState, 'isSubmit'>>;
