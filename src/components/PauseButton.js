import React from 'react';
import { usePlayer } from './PlayerContext';

export const PauseButton = () => {
  const { loading, playing, pause } = usePlayer();
  return (
    <button disabled={loading || !playing} onClick={() => pause()}>
      Pause
    </button>
  );
};
