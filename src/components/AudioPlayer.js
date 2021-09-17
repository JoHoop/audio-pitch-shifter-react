import React from 'react';
import { PlayerProvider } from './PlayerContext';
import { MusicPlayer } from './MusicPlayer';

export const AudioPlayer = () => {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const gainNode = audioCtx.createGain();

  return (
    <PlayerProvider {...{ audioCtx, gainNode }}>
      <MusicPlayer />
    </PlayerProvider>
  );
};
