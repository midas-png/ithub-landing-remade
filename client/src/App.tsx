import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { FC } from 'react';
import { defaultTheme } from './domain';
import { GlobalStyles } from 'assets';
import { Layout } from 'layout';

export const App: FC = () => {
  return (
    <Router>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Layout />
      </ThemeProvider>
    </Router>
  );
};
