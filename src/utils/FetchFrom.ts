import { IApiQuestionsPayload } from '../types/Interface';
import { Dispatch } from 'react';
import { resetForm, startTimer } from '../redux/FormSlice';
import { fetchTest } from '../services/api/GetQuestions';

export const fetchApiQuestions = async (
  setApiPayload: (apiPayload: IApiQuestionsPayload) => void,
  dispatch: Dispatch<any>,
) => {
  dispatch(resetForm());
  const apiPayload = await fetchTest();
  // To demonstrate the lifecycle of React:
  // await new Promise(r => setTimeout(r, 5000));
  setApiPayload(apiPayload);
  dispatch(startTimer());
}

export const fetchApiQuestionsReadonly = async (
  setApiPayload: (apiPayload: IApiQuestionsPayload) => void,
) => {
  const apiPayload = await fetchTest();
  // To demonstrate the lifecycle of React:
  // await new Promise(r => setTimeout(r, 5000));
  setApiPayload(apiPayload);
}
