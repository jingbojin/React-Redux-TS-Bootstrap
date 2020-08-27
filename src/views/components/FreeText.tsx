import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { saveAnswer } from '../../redux/FormSlice';

interface IProps {
  readonly: boolean;
  answer: string;
  questionId: number;
}

export const FreeText = React.memo(
  ({ readonly, answer, questionId }: IProps): JSX.Element => {
    const [userInput, setUserInput] = useState<string>('');
    if (readonly) {
      return (
        <Form.Control
          as="textarea"
          rows={1}
          readOnly={true}
          placeholder={answer}
        />
      );
    } else {
      const dispatch = useDispatch();
      const handleChange = (e: React.BaseSyntheticEvent) => {
        const newValue = e.currentTarget.value;
        setUserInput(newValue);
        dispatch(saveAnswer({
          key: questionId, value: newValue
        }));
      }
      return (
        <Form.Control
          as="textarea"
          rows={1}
          value={userInput}
          onChange={handleChange}
        />
      );
    }
  });
