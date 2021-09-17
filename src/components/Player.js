import React from 'react';
import { PlayButton } from './PlayButton';
import { PauseButton } from './PauseButton';
import { Progress } from './Progress';
import { Tempo } from './Tempo';
import { Pitch } from './Pitch';
import { Key } from './Key';
import { Volume } from './Volume';

export const Player = () => {
  return (
    <div>
      <PlayButton />
      <PauseButton />
      <Progress />
      <Tempo />
      <Pitch />
      <Key />
      <Volume />
    </div>
  );
};
