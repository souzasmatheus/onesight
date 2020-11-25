import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../src/components/bosons';

const MockedTheme = ({ children }) => (
  <ThemeProvider {...{ theme }}>{children}</ThemeProvider>
);

export default MockedTheme;
