import React from 'react';
import { Box, Slider } from '@material-ui/core';
import { usePlayer } from './PlayerContext';

export const Pitch = () => {
  const { pitch, changePitch } = usePlayer();

  return (
    <Box sx={{ width: 300 }}>
      Pitch: {pitch}
      <Slider
        aria-label='Pitch'
        value={pitch}
        onChange={changePitch}
        valueLabelDisplay='on'
        step={0.01}
        min={0.1}
        max={2.0}
      />
    </Box>
  );
};
