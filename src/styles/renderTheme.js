/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
import { theme } from './theme';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

const renderTheme = ({ children }) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};
export default renderTheme;
