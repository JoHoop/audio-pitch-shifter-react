import React from 'react';
import { Landing } from './pages/Landing';
import { ThemeProvider } from './theme/ThemeProvider';
import { CssBaseline } from '@material-ui/core';

export const App = () => {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Landing />
    </ThemeProvider>
  );
};
