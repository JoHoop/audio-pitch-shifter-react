import React from 'react';
import { usePlayer } from './PlayerContext';

const Volume = () => {
  const { volume, changeVolume } = usePlayer();

  return (
    <div>
      <label htmlFor='volumeSlider'>
        Volume: {volume}
        <div>
          <input
            onChange={changeVolume}
            type='range'
            autoFocus
            min='0.0'
            max='10.0'
            name='volumeSlider'
            value={volume}
            id='volumeSlider'
            step='0.01'
            list='volumerange'
          />
          <datalist id='volumerange'>
            <option value='0.0' label='0' />
            <option value='0.5' />
            <option value='1.0' />
            <option value='1.5' />
            <option value='2.0' label='2' />
            <option value='2.5' />
            <option value='3.0' />
            <option value='3.5' />
            <option value='4.0' label='4' />
            <option value='4.5' />
            <option value='5.0' />
            <option value='5.5' />
            <option value='6.0' label='6' />
            <option value='6.5' />
            <option value='7.0' />
            <option value='7.5' />
            <option value='8.0' label='8' />
            <option value='8.5' />
            <option value='9.0' />
            <option value='9.5' />
            <option value='10.0' label='10' />
          </datalist>
        </div>
      </label>
    </div>
  );
};

export default Volume;
