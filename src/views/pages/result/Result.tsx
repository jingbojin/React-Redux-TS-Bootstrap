import React, {
  useEffect,
  useState,
} from 'react';
import { Button } from 'react-bootstrap';
import {
  REDIRECT_TEST_BUTTON_TEXT,
} from '../../../config/TextProvider';
import { IApiQuestionsPayload } from '../../../types/Interface';
import { loopEachQuestionReadonly } from '../exam/QuestionContainer';
import { useSelector } from 'react-redux';
import { ERouterUrl } from '../../../router/PagesRouter';
import {
  selectFinishedTime,
  selectStartedTime,
} from '../../../redux/FormSlice';
import { ResultPageTitle } from './ResultPageTitle';
import { Moment } from 'moment';
import { Link } from 'react-router-dom';
import { Loading } from '../../components/Loading';
import { fetchApiQuestionsReadonly } from '../../../utils/FetchFrom';

export const Result = React.memo((): JSX.Element => {
  const [apiPayload, setApiPayload] = useState<IApiQuestionsPayload | null>(
    null);
  const startedTime = useSelector(selectStartedTime);
  const finishedTime = useSelector(selectFinishedTime);
  
  useEffect(() => {
      fetchApiQuestionsReadonly(setApiPayload);
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
      <Loading />
    );
  } else {
    return (
      <>
        <ResultPageTitle
          testName={apiPayload.testName}
          startedTime={startedTime as Moment}
          finishedTime={finishedTime as Moment}
        />
        <br/>
        <>
          {loopEachQuestionReadonly(
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
