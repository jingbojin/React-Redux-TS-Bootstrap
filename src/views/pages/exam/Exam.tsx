import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Badge, Button, Col, Form, Row } from 'react-bootstrap';
import {
  EXAM_FORM_CONTROL_ID,
  SUBMIT_BUTTON_TEXT,
} from '../../../config/TextProvider';
import { PageTitle } from './PageTitle';
import { IApiQuestionsPayload, IQuestion } from '../../../types/Interface';
import { fetchTest } from '../../../services/api/GetQuestions';
import { QuestionContainer } from './QuestionContainer';
import { decideQuestionVisibility } from '../../../utils/DecideQuestionVisibility';

const fetchApiQuestions = async (setApiPayload: (apiPayload: IApiQuestionsPayload) => void) => {
  const apiPayload = await fetchTest();
  // To demonstrate the lifecycle of React:
  // await new Promise(r => setTimeout(r, 5000));
  setApiPayload(apiPayload);
}

const loopEachQuestion = (
  questions: IQuestion[],
  currentPageNumber: number,
  numberOfQuestionsPerPage: number,
): JSX.Element[] => {
  const questionTotalCount = questions.length;
  return questions.map((q, index): JSX.Element => {
    const visibleYn = decideQuestionVisibility(
      index,
      currentPageNumber,
      numberOfQuestionsPerPage,
    );
    return (
      <QuestionContainer
        key={q.orderId}
        singleQuestion={q}
        questionTotalCount={questionTotalCount}
        readonly={false}
        answer={''}
        visibleYn={visibleYn}
      />
    );
  });
}

const getTotalPageCount = (
  questionCount: number,
  numPerPage: number
): number => {
  return Math.ceil(questionCount / numPerPage);
}
const printPaginationText = (
  apiPayload: IApiQuestionsPayload,
  currentPageNumber: number
): string => {
  const totalPageCount = getTotalPageCount(
    apiPayload.questionList.length,
    apiPayload.pageControl.numPerPage,
  );
  return `Page ${currentPageNumber} of ${totalPageCount}`;
}

const handlePagePrevious = (
  currentPageNumber: number,
  setCurrentPageNumber: Dispatch<SetStateAction<number>>,
) => {
  return () => {
    setCurrentPageNumber(currentPageNumber - 1);
  }
}

const handlePageNext = (
  currentPageNumber: number,
  setCurrentPageNumber: Dispatch<SetStateAction<number>>,
) => {
  return () => {
    setCurrentPageNumber(currentPageNumber + 1);
  }
}

export const Exam = React.memo((): JSX.Element => {
  const [apiPayload, setApiPayload] = useState<IApiQuestionsPayload | null>(
    null);
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);
  
  useEffect(() => {
      fetchApiQuestions(setApiPayload);
    }, []
  );
  
  if (apiPayload === null) {
    return (
      <>
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p>Loading...</p>
      </>
    );
  } else {
    return (
      <>
        <PageTitle examName={apiPayload.testName}/>
        <Form>
          <Form.Group controlId={EXAM_FORM_CONTROL_ID}>
            {loopEachQuestion(
              apiPayload.questionList,
              currentPageNumber,
              apiPayload.pageControl.numPerPage,
            )}
          </Form.Group>
          
          <Row className="my-4">
            <Col xs={3}>
              {currentPageNumber > 1 && (
                <Button
                  variant="danger"
                  onClick={handlePagePrevious(currentPageNumber,
                    setCurrentPageNumber)}
                >
                  Previous
                </Button>
              )}
            </Col>
            <Col xs={6}>
              <Badge variant="light">
                {printPaginationText(apiPayload, currentPageNumber)}
              </Badge>
            </Col>
            <Col xs={3}>
              {currentPageNumber < getTotalPageCount(
                apiPayload.questionList.length,
                apiPayload.pageControl.numPerPage,
              ) && (
                <Button
                  variant="danger"
                  onClick={handlePageNext(currentPageNumber,
                    setCurrentPageNumber)}
                >
                  Next
                </Button>
              )}
            </Col>
          </Row>
          {currentPageNumber === getTotalPageCount(
            apiPayload.questionList.length,
            apiPayload.pageControl.numPerPage,
          ) && (
            <Button
              variant="primary success"
              type="submit"
              className="my-3"
            >
              {SUBMIT_BUTTON_TEXT}
            </Button>
          )}
        </Form>
      </>
    );
  }
});
