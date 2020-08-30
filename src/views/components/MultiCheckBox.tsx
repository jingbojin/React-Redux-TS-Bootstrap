import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { saveAnswer } from '../../redux/FormSlice';
import { IOption, IQuestion } from '../../types/Interface';
import { SelectedAnswer } from './SelectedAnswer';

interface IProps {
  readonly: boolean;
  answer: string[];
  question: IQuestion;
}

export const MultiCheckBox = React.memo(
  ({ readonly, answer, question }: IProps): JSX.Element => {
    if (readonly) {
      return (
        <SelectedAnswer
          answer={answer}
          options={question.options as IOption[]}
        />
      );
    }
    
    const [userSelectedItems, setUserSelectedItems] = useState<string[]>([]);
    const dispatch = useDispatch();
    
    const renderSelect = (): JSX.Element[] => {
      return (question.options as IOption[]).map((e, index) => {
        // https://github.com/react-bootstrap/react-bootstrap/issues/4056
        return (
          <Form.Check
            custom
            type='checkbox'
            key={`SingleChoice-${question.orderId}-${index}`}
            id={`SingleChoice-${question.orderId}-${e.key}`}
            label={e.value}
            value={e.key}
            onChange={handleChange}
          />
        );
      });
    }
    
    const handleChange = (e: React.BaseSyntheticEvent) => {
      const newValue = e.currentTarget.value;
      if (userSelectedItems.includes(newValue)) {
        // 1: Removing previous selected item, if double clicked it
        const clone = [...answer];
        const index = clone.indexOf(newValue);
        clone.splice(index, 1);
        dispatch(saveAnswer({
          key: question.orderId, value: clone
        }));
        setUserSelectedItems(clone);
      } else {
        // 2: Adding newly selected item
        const newArray = [
          ...userSelectedItems,
          newValue,
        ];
        dispatch(saveAnswer({
          key: question.orderId, value: newArray
        }));
        setUserSelectedItems(newArray);
      }
    }
    return (
      <>
        {renderSelect()}
      </>
    );
  }
);
