import { Col, Row } from 'react-bootstrap';
import React from 'react';
import { Moment } from 'moment';

interface IProps {
  testName: string;
  startedTime: Moment;
  finishedTime: Moment;
}

export const ResultPageTitle = React.memo((
  { testName, startedTime, finishedTime }: IProps
): JSX.Element => {
  return (
    <>
      <Row>
        <Col xs={3} className="text-right font-weight-bolder">Title:</Col>
        <Col xs={9}>{testName}</Col>
      </Row>
      <Row>
        <Col xs={3} className="text-right font-weight-bolder">Date started</Col>
        <Col xs={9}>{startedTime.format('MMMM Do YYYY, h:mm:ss a')}</Col>
      </Row>
      <Row>
        <Col xs={3} className="text-right font-weight-bolder">Date finished
        </Col>
        <Col xs={9}>{finishedTime.format('MMMM Do YYYY, h:mm:ss a')}</Col>
      </Row>
    </>
  );
});
