import React from 'react';
import { usePlayer } from './PlayerContext';

const Pitch = () => {
  const { pitch, changePitch } = usePlayer();

  return (
    <div>
      <label htmlFor='pitchSlider'>
        Pitch: {pitch}
        <div>
          <input
            onChange={changePitch}
            type='range'
            autoFocus
            min='0.1'
            max='2.0'
            name='pitchSlider'
            value={pitch}
            id='pitchSlider'
            step='0.01'
            list='pitchrange'
          />
          <datalist id='pitchrange'>
            <option value='0.1' label='0' />
            <option value='0.5' />
            <option value='1.0' />
            <option value='1.5' />
            <option value='2.0' label='2' />
          </datalist>
        </div>
      </label>
    </div>
  );
};

export default Pitch;
