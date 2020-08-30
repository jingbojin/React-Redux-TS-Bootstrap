import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../../redux/store';
import App from '../App';

it('renders Loading...', () => {
  const { queryAllByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(queryAllByText('Loading...')).toHaveLength(2);
});
