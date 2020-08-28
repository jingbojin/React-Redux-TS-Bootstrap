import React from 'react';
import { IQuestion } from '../../types/Interface';
import { Badge } from 'react-bootstrap';

interface IProps {
  answer: string | string[];
  question: IQuestion;
}
export const SelectedAnswer = React.memo(
  ({ answer, question }: IProps): JSX.Element => {
    return (
      <>
        Profile <Badge variant="success">&#10004;</Badge>
      </>
    );
  });
