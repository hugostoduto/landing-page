import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global-styles';
import Home from './templates/App/index';
import { theme } from './styles/theme';
import { Heading } from './components/Heading';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Heading>hugo</Heading>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
);
