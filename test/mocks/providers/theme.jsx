import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '~/components/bosons';

const MockedTheme = ({ children }) => (
  <ThemeProvider {...{ theme }}>{children}</ThemeProvider>
);

export default MockedTheme;
