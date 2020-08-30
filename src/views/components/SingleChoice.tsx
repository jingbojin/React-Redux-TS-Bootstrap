import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { saveAnswer } from '../../redux/FormSlice';
import { IOption, IQuestion } from '../../types/Interface';
import { SelectedAnswer } from './SelectedAnswer';

interface IProps {
  readonly: boolean;
  answer: string;
  question: IQuestion;
}

export const SingleChoice = React.memo(
  ({ readonly, answer, question }: IProps): JSX.Element => {
    if (readonly) {
      return (
        <SelectedAnswer
          answer={answer}
          options={question.options as IOption[]}
        />
      );
    }
    
    const [userInput, setUserInput] = useState<string>('');
    const dispatch = useDispatch();
    
    const renderSelect = (): JSX.Element[] => {
      return (question.options as IOption[]).map((e, index) => {
        // https://github.com/react-bootstrap/react-bootstrap/issues/4056
        return (
          <Form.Check
            custom
            type='radio'
            key={`SingleChoice-${question.orderId}-${index}`}
            id={`SingleChoice-${question.orderId}-${e.key}`}
            label={e.value}
            value={e.key}
            checked={e.key === userInput}
            onChange={handleChange}
          />
        );
      });
    }
    
    const handleChange = (e: React.BaseSyntheticEvent) => {
      const newValue = e.currentTarget.value;
      setUserInput(newValue);
      dispatch(saveAnswer({
        key: question.orderId, value: newValue
      }));
    }
    return (
      <>
        {renderSelect()}
      </>
    );
  }
);
