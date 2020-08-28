import React, {
  useEffect,
  useState
} from 'react';
import { Button } from 'react-bootstrap';
import {
  REDIRECT_TEST_BUTTON_TEXT,
} from '../../../config/TextProvider';
import { IApiQuestionsPayload, IQuestion } from '../../../types/Interface';
import { fetchTest } from '../../../services/api/GetQuestions';
import { QuestionContainer } from '../exam/QuestionContainer';
import { useSelector } from 'react-redux';
import { ERouterUrl } from '../../../router/PagesRouter';
import {
  selectFinishedTime,
  selectStartedTime
} from '../../../redux/FormSlice';
import { ResultPageTitle } from './ResultPageTitle';
import { Moment } from 'moment';
import { Link } from 'react-router-dom';

const fetchApiQuestions = async (
  setApiPayload: (apiPayload: IApiQuestionsPayload) => void,
) => {
  const apiPayload = await fetchTest();
  // To demonstrate the lifecycle of React:
  // await new Promise(r => setTimeout(r, 5000));
  setApiPayload(apiPayload);
}

const loopEachQuestion = (
  questions: IQuestion[],
): JSX.Element[] => {
  const questionTotalCount = questions.length;
  return questions.map((q, index): JSX.Element => {
    return (
      <QuestionContainer
        key={q.orderId}
        singleQuestion={q}
        questionTotalCount={questionTotalCount}
        readonly
        visibleYn
      />
    );
  });
}

export const Result = React.memo((): JSX.Element => {
  const [apiPayload, setApiPayload] = useState<IApiQuestionsPayload | null>(
    null);
  const startedTime = useSelector(selectStartedTime);
  const finishedTime = useSelector(selectFinishedTime);
  
  useEffect(() => {
      fetchApiQuestions(setApiPayload);
      /**
       * https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects
       *
       * If you want to run an effect and clean it up only once (on mount and
       * unmount), you can pass an empty array ([]) as a second argument. This
       * tells React that your effect doesn’t depend on any values from props
       * or
       * state, so it never needs to re-run.
       */
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
        <ResultPageTitle
          testName={apiPayload.testName}
          startedTime={startedTime as Moment}
          finishedTime={finishedTime as Moment}
        />
        <>
          {loopEachQuestion(
            apiPayload.questionList,
          )}
        </>
        <Link to={ERouterUrl.exam}>
          <Button
            variant="success"
            className="my-3"
          >
            {REDIRECT_TEST_BUTTON_TEXT}
          </Button>
        </Link>
      </>
    );
  }
});
