import React from 'react';

export const Loading = React.memo((): JSX.Element => {
    return (
      <>
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p>Loading...</p>
      </>
    );
  }
);
