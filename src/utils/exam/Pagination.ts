import { IApiQuestionsPayload } from '../../types/Interface';
import { Dispatch, SetStateAction } from 'react';

export const getTotalPageCount = (
  questionCount: number,
  numPerPage: number
): number => {
  return Math.ceil(questionCount / numPerPage);
}

export const printPaginationText = (
  apiPayload: IApiQuestionsPayload,
  currentPageNumber: number
): string => {
  const totalPageCount = getTotalPageCount(
    apiPayload.questionList.length,
    apiPayload.pageControl.numPerPage,
  );
  return `Page ${currentPageNumber} of ${totalPageCount}`;
}

export const handlePagePrevious = (
  currentPageNumber: number,
  setCurrentPageNumber: Dispatch<SetStateAction<number>> | ((currentPageNumber: number)=> void),
) => {
  return () => {
    setCurrentPageNumber(currentPageNumber - 1);
  }
}

export const handlePageNext = (
  currentPageNumber: number,
  setCurrentPageNumber: Dispatch<SetStateAction<number>> | ((currentPageNumber: number)=> void),
) => {
  return () => {
    setCurrentPageNumber(currentPageNumber + 1);
  }
}
