import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';

const MockedRouter = ({ children, ...rest }) => (
  <Router {...rest}>{children}</Router>
);

export default MockedRouter;
