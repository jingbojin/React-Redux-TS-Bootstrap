import { printQuestionLabel } from '../PrintQuestionLabel';

describe('PrintQuestionLabel.ts', () => {
  it('test printQuestionLabel()', () => {
    const result = printQuestionLabel(29,200);
    expect(result).toBe('Question 29 of 200');
  })
})
