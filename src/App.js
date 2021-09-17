import React from 'react';
import { Header } from './components/Header';
import { AudioPlayer } from './components/AudioPlayer';
import { ThemeWrapper } from './theme/ThemeProvider';
import { CssBaseline } from '@mui/material';

export const App = () => {
  return (
    <ThemeWrapper>
      <CssBaseline />
      <Header />
      <AudioPlayer />
    </ThemeWrapper>
  );
};
