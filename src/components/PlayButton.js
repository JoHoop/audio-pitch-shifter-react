import React from 'react';
import { usePlayer } from './PlayerContext';

export const PlayButton = () => {
  const { shifter, loading, playing, play } = usePlayer();
  return (
    <button disabled={!!!shifter || loading || playing} onClick={play}>
      Play
    </button>
  );
};
