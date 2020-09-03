import React, {
  useEffect,
  useState,
} from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import {
  EXAM_FORM_CONTROL_ID,
  SUBMIT_BUTTON_TEXT,
} from '../../../config/TextProvider';
import { PageTitle } from './PageTitle';
import { IApiQuestionsPayload } from '../../../types/Interface';
import { loopEachQuestion } from './QuestionContainer';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  BsFiles,
  BsFillCaretLeftFill,
  BsFillCaretRightFill,
} from 'react-icons/bs';
import {
  getTotalPageCount,
  handlePageNext,
  handlePagePrevious,
  printPaginationText,
} from '../../../utils/exam/Pagination';
import { handleFormSubmit } from '../../../utils/exam/Form';
import { fetchApiQuestions } from '../../../utils/FetchFrom';
import { Loading } from '../../components/Loading';

export const Exam = React.memo((): JSX.Element => {
  const [apiPayload, setApiPayload] = useState<IApiQuestionsPayload | null>(null);
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
       * tells React that your effect doesn’t depend on any values from props
       * or
       * state, so it never needs to re-run.
       */
    }, [dispatch]
  );
  
  if (apiPayload === null) {
    return (
      <Loading />
    );
  } else {
    return (
      <>
        <PageTitle examName={apiPayload.testName}/>
        <Form onSubmit={handleFormSubmit(dispatch, routerHistory)}>
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
                  onClick={handlePagePrevious(
                    currentPageNumber,
                    setCurrentPageNumber,
                  )}
                >
                  <BsFillCaretLeftFill/>Previous
                </Button>
              )}
            </Col>
            <Col xs={6}>
              <BsFiles/>{printPaginationText(apiPayload, currentPageNumber)}
            </Col>
            <Col xs={3}>
              {currentPageNumber < getTotalPageCount(
                apiPayload.questionList.length,
                apiPayload.pageControl.numPerPage,
              ) && (
                <Button
                  variant="danger"
                  onClick={
                    handlePageNext(currentPageNumber, setCurrentPageNumber)}
                >
                  Next<BsFillCaretRightFill/>
                </Button>
              )}
            </Col>
          </Row>
          {currentPageNumber === getTotalPageCount(
            apiPayload.questionList.length,
            apiPayload.pageControl.numPerPage,
          ) && (
            <Button variant="primary" type="submit" className="my-3">
              {SUBMIT_BUTTON_TEXT}
            </Button>
          )}
        </Form>
      </>
    );
  }
});
