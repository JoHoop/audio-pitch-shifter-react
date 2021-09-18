import React from 'react';
import { Header } from './components/Header';
import { AudioWrapper } from './components/AudioWrapper';
import { ThemeWrapper } from './theme/ThemeProvider';
import { CssBaseline, Box } from '@mui/material';

export const App = () => {
  return (
    <ThemeWrapper>
      <CssBaseline />
      <Box flexDirection='column'>
        <Header />
        <Box mt={8}>
          <AudioWrapper />
        </Box>
      </Box>
    </ThemeWrapper>
  );
};
