export const decideQuestionVisibility = (
  index: number,
  currentPageNumber: number,
  numberOfQuestionsPerPage: number
): boolean => {
  // Notes: `index` starts with 0, `minQuestionIndex` also starts with 0.
  // However, PageNumber start with 1:
  const minQuestionIndex = (currentPageNumber - 1) * numberOfQuestionsPerPage;
  const maxQuestionIndex = (currentPageNumber * numberOfQuestionsPerPage) - 1;
  return (index >= minQuestionIndex) && (index <= maxQuestionIndex);
}
