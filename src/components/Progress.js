import React from 'react';
import { usePlayer } from './PlayerContext';

export const Progress = () => {
  const { playHead, duration, progress, resetPlayHead } = usePlayer();
  const onClick = ({ target, pageX }) => {
    if (duration !== '0:00') {
      const pos = target.getBoundingClientRect();
      const relX = pageX - pos.x;
      const perc = relX / target.offsetWidth;
      resetPlayHead(perc);
    }
  };

  return (
    <div>
      <span>{playHead}</span>
      <span>{duration}</span>
      <progress
        onClick={onClick}
        id='progressMeter'
        value={progress}
        max='100'
      />
    </div>
  );
};
