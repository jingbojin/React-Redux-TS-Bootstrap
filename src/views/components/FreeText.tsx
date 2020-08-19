import React from 'react';
import Form from 'react-bootstrap/Form';

export const FreeText = React.memo((): JSX.Element => {
  return (
    <Form.Group controlId="exampleForm.ControlTextarea1">
      <Form.Label>Example textarea</Form.Label>
      <Form.Control as="textarea" rows={3}/>
    </Form.Group>
  );
});
