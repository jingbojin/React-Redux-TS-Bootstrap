import React from 'react';
import { IOption } from '../../types/Interface';
import { Col, Row } from 'react-bootstrap';
import { BsCheckBox } from 'react-icons/bs';

interface IProps {
  answer: string | string[];
  options: IOption[];
}

export const SelectedAnswer = React.memo(
  ({ answer, options }: IProps): JSX.Element => {
    return (
      <>
        {options.map((item) => (
          <Row>
            <Col xs={1}>
              {((answer && answer.includes(item.key)) || answer === item.key) &&
              <BsCheckBox color={'green'}/>
              }
            </Col>
            <Col xs={11}>
              <p>
                {item.value}
              </p>
            </Col>
          </Row>
        ))}
      </>
    );
  }
);
