import { formSlice, initialState, startTimer, finishTimer, saveAnswer } from '../FormSlice';
import moment from 'moment';

describe('FormSlice.ts', () => {
  it('should handle initial state', () => {
    expect(formSlice.reducer(undefined, {} as any)).toEqual(initialState)
  });
  
  it('should handle startTimer', () => {
    const timeNow = moment();
    const result1 = formSlice.reducer(initialState, {
      type: startTimer.type,
    });
    expect({
        ...result1,
        startedTime: null,
      }
    ).toEqual(
      {
        ...initialState,
        startedTime: null,
      }
    );
    const compareTimer = moment(result1.startedTime).isSame(timeNow, 'second');
    expect(compareTimer).toBeTruthy();
    
    const time2 = moment();
    const result2 = formSlice.reducer(
      {
        ...initialState,
        startedTime: timeNow,
      }, {
        type: startTimer.type,
      });
    expect({
        ...result2,
        startedTime: null,
      }
    ).toEqual(
      {
        ...initialState,
        startedTime: null,
      }
    );
    const compareTimer2 = moment(result2.startedTime).isSame(time2, 'second');
    expect(compareTimer2).toBeTruthy();
  });
  
  it('should handle finishTimer', () => {
    const timeNow = moment();
    const result1 = formSlice.reducer(initialState, {
      type: finishTimer.type,
    });
    expect({
        ...result1,
        finishedTime: null,
      }
    ).toEqual(
      {
        ...initialState,
        finishedTime: null,
      }
    );
    const compareTimer = moment(result1.finishedTime).isSame(timeNow, 'second');
    expect(compareTimer).toBeTruthy();
    
    const time2 = moment();
    const result2 = formSlice.reducer(
      {
        ...initialState,
        finishedTime: timeNow,
      }, {
        type: finishTimer.type,
      });
    expect({
        ...result2,
        finishedTime: null,
      }
    ).toEqual(
      {
        ...initialState,
        finishedTime: null,
      }
    );
    const compareTimer2 = moment(result2.finishedTime).isSame(time2, 'second');
    expect(compareTimer2).toBeTruthy();
  });
  
  it('should handle saveAnswer', () => {
    const result1 = formSlice.reducer(initialState, {
      type: saveAnswer.type,
      payload: {
        key: 28,
        value: 'the answer of question 28',
      }
    });
    expect(result1).toEqual(
      {
        ...initialState,
        answers: {
          28: 'the answer of question 28',
        },
      }
    );
  
    const result2 = formSlice.reducer(result1, {
      type: saveAnswer.type,
      payload: {
        key: 12,
        value: 'question 12 is answered',
      }
    });
    expect(result2).toEqual(
      {
        ...result1,
        answers: {
          12: 'question 12 is answered',
          28: 'the answer of question 28',
        },
      }
    );
  
    const result3 = formSlice.reducer(result2, {
      type: saveAnswer.type,
      payload: {
        key: 12,
        value: 'question 12 answer is now changed',
      }
    });
    expect(result3).toEqual(
      {
        ...result1,
        answers: {
          12: 'question 12 answer is now changed',
          28: 'the answer of question 28',
        },
      }
    );
  });
  
  it('saveAnswer should handle MultiCheckBox', () => {
    const result0 = formSlice.reducer(initialState, {
      type: saveAnswer.type,
      payload: {
        key: 28,
        value: [],
      }
    });
    expect(result0).toEqual(
      {
        ...initialState,
        answers: {
          28: [],
        },
      }
    );
    const result1 = formSlice.reducer(result0, {
      type: saveAnswer.type,
      payload: {
        key: 28,
        value: ['B', 'C'],
      }
    });
    expect(result1).toEqual(
      {
        ...result0,
        answers: {
          28: ['B', 'C'],
        },
      }
    );
    
    const result2 = formSlice.reducer(result1, {
      type: saveAnswer.type,
      payload: {
        key: 28,
        value: ['A', 'D'],
      }
    });
    expect(result2).toEqual(
      {
        ...result1,
        answers: {
          28: ['A', 'D'],
        },
      }
    );
  });
});
