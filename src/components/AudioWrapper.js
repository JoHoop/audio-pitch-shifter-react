import React from 'react';
import { PlayerProvider } from './PlayerContext';
import { AudioPlayer } from './AudioPlayer';

export const AudioWrapper = () => {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const gainNode = audioCtx.createGain();

  return (
    <PlayerProvider {...{ audioCtx, gainNode }}>
      <AudioPlayer />
    </PlayerProvider>
  );
};
