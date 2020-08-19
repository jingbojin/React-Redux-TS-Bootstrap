export const printQuestionLabel = (
  questionId: number,
  questionTotalCount: number,
): string => {
  return `Question ${questionId} of ${questionTotalCount}`;
}
