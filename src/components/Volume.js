import React from 'react';
import { Box, Slider } from '@material-ui/core';
import { usePlayer } from './PlayerContext';

export const Volume = () => {
  const { volume, changeVolume } = usePlayer();

  return (
    <Box sx={{ width: 300 }}>
      Volume: {volume}
      <Slider
        aria-label='Pitch'
        value={volume}
        onChange={changeVolume}
        valueLabelDisplay='on'
        step={0.01}
        min={0.0}
        max={10.0}
      />
    </Box>
  );
};
