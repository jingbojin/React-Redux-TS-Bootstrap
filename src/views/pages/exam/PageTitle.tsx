import React from 'react';

interface IProps {
  examName: string;
}

export const PageTitle = React.memo(({examName}: IProps): JSX.Element => {
  return (
    <>
      <h4>{examName}</h4>
      <br/>
    </>
  );
});
