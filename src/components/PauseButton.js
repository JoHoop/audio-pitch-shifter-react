import React from 'react';
import { usePlayer } from './PlayerContext';

const PauseButton = () => {
  const { loading, playing, pause } = usePlayer();
  return (
    <button disabled={loading || !playing} onClick={() => pause()}>
      Pause
    </button>
  );
};

export default PauseButton;
