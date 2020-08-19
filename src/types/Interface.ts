export enum EQuestionType {
  singleSelect = 'singleSelect',
  multiCheckbox = 'multiCheckbox',
  freeText = 'freeText',
}

export interface IOption {
  key: string;
  value: string;
}

export interface IQuestion {
  orderId: number;
  type: EQuestionType;
  questionText: string;
  options?: IOption[];
}

export interface IApiQuestionsPayload {
  testName: string;
  questionList: IQuestion[];
  pageControl: {
    numPerPage: number;
  };
}

export interface IFormItem {
  [key: number]: string;
}

export const ANSWER_INPUT_EMIT_NAME = 'answerInputEmitName';
