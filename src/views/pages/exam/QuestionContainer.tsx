import React from 'react';
import { EQuestionType, IQuestion } from '../../../types/Interface';
import { Accordion, Card } from 'react-bootstrap';
import { printQuestionLabel } from '../../../utils/PrintQuestionLabel';
import { FreeText } from '../../components/FreeText';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { SingleChoice } from '../../components/SingleChoice';
import { MultiCheckBox } from '../../components/MultiCheckBox';
import { decideQuestionVisibility } from '../../../utils/DecideQuestionVisibility';

interface IProps {
  singleQuestion: IQuestion;
  questionTotalCount: number;
  readonly: boolean;
  visibleYn: boolean
}

export const QuestionContainer = React.memo(
  ({
     singleQuestion,
     questionTotalCount,
     readonly,
     visibleYn,
   }: IProps): JSX.Element => {
    const answer = useSelector(
      (state: RootState) => state.form.answers[singleQuestion.orderId]);
    return (
      <div className={visibleYn ? 'd-block' : 'd-none'}>
        <Accordion defaultActiveKey="0">
          <Card className="text-left">
            <Accordion.Toggle as={Card.Header} eventKey="0">
              {printQuestionLabel(singleQuestion.orderId, questionTotalCount)}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Card.Title>
                  <p>{singleQuestion.questionText}</p>
                </Card.Title>
                <hr/>
                {
                  (singleQuestion.type === EQuestionType.freeText) && (
                    <FreeText
                      readonly={readonly}
                      answer={answer as string}
                      questionId={singleQuestion.orderId}
                    />
                  )
                }
                {
                  (singleQuestion.type === EQuestionType.singleSelect) && (
                    <SingleChoice
                      readonly={readonly}
                      answer={answer as string}
                      question={singleQuestion}
                    />
                  )
                }
                {
                  (singleQuestion.type === EQuestionType.multiCheckbox) && (
                    <MultiCheckBox
                      readonly={readonly}
                      answer={answer as string[]}
                      question={singleQuestion}
                    />
                  )
                }
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        
        <br/>
      </div>
    );
  }
);

export const loopEachQuestion = (
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

export const loopEachQuestionReadonly = (
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
