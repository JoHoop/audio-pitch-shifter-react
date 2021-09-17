import React from 'react';
import { PlayerProvider } from './PlayerContext';
import { LoadButton } from './LoadButton';
import { Player } from './Player';

export const AudioPlayer = () => {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const gainNode = audioCtx.createGain();

  return (
    <PlayerProvider {...{ audioCtx, gainNode }}>
      <LoadButton />
      <Player />
    </PlayerProvider>
  );
};
