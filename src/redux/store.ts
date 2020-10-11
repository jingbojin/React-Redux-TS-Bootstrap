import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './CounterSlice';
import { formSlice } from './FormSlice';

export const store = configureStore({
  reducer: {
    form: formSlice.reducer,
    // You can of course adding more reducer here, eg:
    counter: counterReducer,
  },
  
  
  // This only concerns Chrome extension: Redux dev tool:
  // https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
  devTools: {
    trace: true,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
