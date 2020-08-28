import React, {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState
} from 'react';
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
import { useDispatch } from 'react-redux';
import { startTimer, finishTimer } from '../../../redux/FormSlice';
import { useHistory } from 'react-router-dom';
import * as H from 'history';
import { ERouterUrl } from '../../../router/PagesRouter';

const fetchApiQuestions = async (
  setApiPayload: (apiPayload: IApiQuestionsPayload) => void,
  dispatch: Dispatch<any>,
) => {
  const apiPayload = await fetchTest();
  // To demonstrate the lifecycle of React:
  // await new Promise(r => setTimeout(r, 5000));
  setApiPayload(apiPayload);
  dispatch(startTimer());
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

const handleFormSubmit = (
  dispatch: Dispatch<any>,
  routerHistory: H.History,
) => {
  return (evt: FormEvent) => {
    evt.preventDefault();
    dispatch(finishTimer());
    routerHistory.push(ERouterUrl.result);
  }
}

export const Exam = React.memo((): JSX.Element => {
  const [apiPayload, setApiPayload] = useState<IApiQuestionsPayload | null>(
    null);
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);
  const dispatch = useDispatch();
  const routerHistory = useHistory();
  
  useEffect(() => {
      fetchApiQuestions(setApiPayload, dispatch);
    /**
     * https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects
     *
     * If you want to run an effect and clean it up only once (on mount and
     * unmount), you can pass an empty array ([]) as a second argument. This
     * tells React that your effect doesn’t depend on any values from props or
     * state, so it never needs to re-run.
     */
    }, [dispatch]
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
        <Form onSubmit={handleFormSubmit(dispatch,routerHistory)}>
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
              variant="primary"
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
