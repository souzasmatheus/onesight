import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';
import './index.css';
import { theme } from './components/bosons';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider {...{ theme }}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
