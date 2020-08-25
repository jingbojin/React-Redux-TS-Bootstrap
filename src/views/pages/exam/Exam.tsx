import React from 'react';
import { Button, Form } from 'react-bootstrap';
import {
  EXAM_FORM_CONTROL_ID,
  SUBMIT_BUTTON_TEXT,
} from '../../../config/TextProvider';
import { PageTitle } from './PageTitle';

export const Exam = React.memo((): JSX.Element => {
  return (
    <>
    <PageTitle examName='dsomd' />
    <Form>
      <Form.Group controlId={EXAM_FORM_CONTROL_ID}>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
    
      <Form.Group controlId={EXAM_FORM_CONTROL_ID}>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button
        variant="primary success"
        type="submit"
      >
        {SUBMIT_BUTTON_TEXT}
      </Button>
    </Form>
    </>
  );
});
