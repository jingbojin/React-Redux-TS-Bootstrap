import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from './store';
import { IFormItem } from '../types/Interface';
import moment, { Moment } from 'moment';

export interface ActionAddAnswer {
  key: number,
  value: string | string[],
}

export interface FormState {
  answers: IFormItem;
  startedTime: Moment | null;
  finishedTime: Moment | null;
}

// https://michaelnthiessen.com/state-management-without-vuex/
// https://vuejs.org/v2/guide/state-management.html#Simple-State-Management-from-Scratchss
export const initialState: FormState = {
  answers: {},
  startedTime: null,
  finishedTime: null,
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    startTimer: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.startedTime = moment();
    },
    finishTimer: state => {
      state.finishedTime = moment();
    },
    
    // Use the PayloadAction type to declare the contents of `action.payload`
    saveAnswer: (state, action: PayloadAction<ActionAddAnswer>) => {
      state.answers[action.payload.key] = action.payload.value;
    },
    
    resetForm: state => {
      state = initialState;
    },
  },
});

export const { startTimer, finishTimer, saveAnswer, resetForm } = formSlice.actions;

// NOTE: you can of course, control this flow by your own inside your application logic,
// without using below.
// ******
// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const saveAnswerAsync = (answer: ActionAddAnswer): AppThunk => dispatch => {
  setTimeout(() => {
    dispatch(saveAnswer(answer));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectAnswers = (state: RootState) => state.form.answers;

export const selectStartedTime = (state: RootState) => state.form.startedTime;
export const selectFinishedTime = (state: RootState) => state.form.finishedTime;

export const selectAnswerById = (questionOrderId: number) => {
  return (state: RootState) => state.form.answers[questionOrderId];
}
