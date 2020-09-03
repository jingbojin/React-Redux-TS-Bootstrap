import React, { Dispatch } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import {
  EXAM_FORM_CONTROL_ID,
  SUBMIT_BUTTON_TEXT,
} from '../../../config/TextProvider';
import { PageTitle } from './PageTitle';
import { IApiQuestionsPayload } from '../../../types/Interface';
import { loopEachQuestion } from './QuestionContainer';
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
// Because we are using class comments, we have to use `connect`;
// https://stackoverflow.com/questions/61093603/how-to-use-a-dispatch-react-redux-into-class-component
import { connect } from 'react-redux';
// For react router:
// https://stackoverflow.com/questions/58122219/constructor-props-equivalent-in-react-hooks-for-history-push
import * as H from 'history';

interface IProps {
  dispatch: Dispatch<any>;
  routerHistory: H.History;
}

interface IState {
  apiPayload: IApiQuestionsPayload | null;
  currentPageNumber: number;
}

export class ExamWithoutHook extends React.Component<IProps, IState> {
  readonly state: IState = {
    apiPayload: null,
    currentPageNumber: 1,
  };
  
  private setApiPayload = (apiPayload: IApiQuestionsPayload): void => {
    this.setState({
      apiPayload,
    });
  };
  
  private setCurrentPageNumber = (currentPageNumber: number): void => {
    this.setState({
      currentPageNumber,
    });
  };
  
  /**
   * componentDidMount() is invoked immediately after a component is mounted
   * (inserted into the tree). Initialization that requires DOM nodes should go
   * here. If you need to load data from a remote endpoint, this is a good
   * place to instantiate the network request.
   * https://reactjs.org/docs/react-component.html#componentdidmount
   */
  public componentDidMount = async () => {
    // Have to use `this` when using Class:
    await fetchApiQuestions(this.setApiPayload, this.props.dispatch);
  };
  
  public render() {
    // Have to use `this` when using Class:
    const { apiPayload, currentPageNumber } = this.state;
    const { dispatch, routerHistory } = this.props;
    const setCurrentPageNumber = this.setCurrentPageNumber;
    
    if (apiPayload === null) {
      return (
        <Loading/>
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
  }
}

// since we are using class component:
// https://stackoverflow.com/questions/61093603/how-to-use-a-dispatch-react-redux-into-class-component
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    dispatch: dispatch,
  }
};
export default connect(null, mapDispatchToProps)(ExamWithoutHook)
