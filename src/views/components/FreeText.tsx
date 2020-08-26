import React from 'react';
import Form from 'react-bootstrap/Form';

interface IProps {
  readonly: boolean;
  answer: string;
}

export const FreeText = React.memo(({ readonly, answer } : IProps): JSX.Element => {
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
    return (
      <Form.Control
        as="textarea"
        rows={1}
      />
    );
  }
});
