import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './CounterSlice';
import { formSlice } from './FormSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    form: formSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
