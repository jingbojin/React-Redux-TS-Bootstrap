import React from 'react';
import { EQuestionType, IQuestion } from '../../../types/Interface';
import { Accordion, Card } from 'react-bootstrap';
import { printQuestionLabel } from '../../../utils/PrintQuestionLabel';
import { FreeText } from '../../components/FreeText';

interface IProps {
  singleQuestion: IQuestion;
  questionTotalCount: number;
  readonly: boolean;
  answer: string;
  visibleYn: boolean
}

export const QuestionContainer = React.memo(
  ({ singleQuestion, questionTotalCount, readonly, answer, visibleYn }: IProps): JSX.Element => {
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
                <Card.Text>
                  {
                    (singleQuestion.type === EQuestionType.freeText) && (
                      <FreeText
                        readonly={readonly}
                        answer={answer}
                      />
                    )
                  }
                </Card.Text>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        
        <br/>
      </div>
    );
  });
