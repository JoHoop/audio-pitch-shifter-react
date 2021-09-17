import React from 'react';
import { Header } from './components/Header';
import { AudioWrapper } from './components/AudioWrapper';
import { ThemeWrapper } from './theme/ThemeProvider';
import { CssBaseline } from '@mui/material';

export const App = () => {
  return (
    <ThemeWrapper>
      <CssBaseline />
      <Header />
      <AudioWrapper />
    </ThemeWrapper>
  );
};
