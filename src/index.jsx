import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider as ReduxProvider } from 'react-redux';

import { theme } from './components/bosons';

import App from './App';
import './index.css';
import store from './feature/store';

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider {...{ store }}>
      <ThemeProvider {...{ theme }}>
        <App />
      </ThemeProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
