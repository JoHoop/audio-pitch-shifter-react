import React from 'react';
import { Box, Slider } from '@material-ui/core';
import { usePlayer } from './PlayerContext';

export const Tempo = () => {
  const { tempo, changeTempo } = usePlayer();

  return (
    <Box sx={{ width: 300 }}>
      Tempo: {tempo}
      <Slider
        aria-label='Pitch'
        value={tempo}
        onChange={changeTempo}
        valueLabelDisplay='on'
        step={0.01}
        min={0.1}
        max={4.0}
      />
    </Box>
  );
};
