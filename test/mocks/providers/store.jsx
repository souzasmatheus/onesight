import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const MockedStore = ({ children, state = {} }) => {
  const mockStore = configureStore([]);
  return <Provider store={mockStore(state)}>{children}</Provider>;
};

export default MockedStore;
