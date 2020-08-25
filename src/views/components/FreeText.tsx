import React from 'react';
import Form from 'react-bootstrap/Form';

interface IProps {
  readonly: boolean;
  
}

export const FreeText = React.memo(({ readonly } : IProps): JSX.Element => {
  if (readonly) {
    return (
      <>
      
      </>
    );
  } else {
    return (
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3}/>
      </Form.Group>
    );
  }
});
