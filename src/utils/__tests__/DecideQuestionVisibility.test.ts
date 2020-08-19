import { decideQuestionVisibility } from '../DecideQuestionVisibility';

describe('DecideQuestionVisibility.ts', () => {
  it('test decideQuestionVisibility()', () => {
    const result = decideQuestionVisibility(3,2,2);
    expect(result).toBe(true);
  })
})
