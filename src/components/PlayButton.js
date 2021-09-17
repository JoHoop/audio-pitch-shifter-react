import React from 'react';
import { usePlayer } from './PlayerContext';

const PlayButton = () => {
  const { shifter, loading, playing, play } = usePlayer();
  return (
    <button disabled={!!!shifter || loading || playing} onClick={play}>
      Play
    </button>
  );
};

export default PlayButton;
