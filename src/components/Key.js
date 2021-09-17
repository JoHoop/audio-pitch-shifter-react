import React from 'react';
import { Box, Slider } from '@material-ui/core';
import { usePlayer } from './PlayerContext';

export const Key = () => {
  const { semitone, changeSemitone } = usePlayer();

  return (
    <Box sx={{ width: 300 }}>
      Key: {semitone}
      <Slider
        aria-label='Pitch'
        value={semitone}
        onChange={changeSemitone}
        valueLabelDisplay='on'
        step={1}
        min={-7.0}
        max={7.0}
      />
    </Box>
  );
};
