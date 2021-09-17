import React from 'react';
import { Landing } from './pages/Landing';
import { ThemeWrapper } from './theme/ThemeProvider';
import { CssBaseline } from '@mui/material';

export const App = () => {
  return (
    <ThemeWrapper>
      <CssBaseline />
      <Landing />
    </ThemeWrapper>
  );
};
