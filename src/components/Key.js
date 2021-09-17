import React from 'react';
import { usePlayer } from './PlayerContext';

const Key = () => {
  const { semitone, changeSemitone } = usePlayer();

  return (
    <div>
      <label htmlFor='keyrange'>
        Change Key: {semitone / 2}
        <div>
          <input
            onChange={changeSemitone}
            type='range'
            autoFocus
            min='-7.0'
            max='7.0'
            name='keySlider'
            value={semitone}
            id='keySlider'
            step='1'
            list='keyrange'
          />
          <datalist id='keyrange'>
            <option value='-7' />
            <option value='-6' />
            <option value='-5' />
            <option value='-4' />
            <option value='-3' />
            <option value='-2' />
            <option value='-1' />
            <option value='0' />
            <option value='1' />
            <option value='2' />
            <option value='3' />
            <option value='4' />
            <option value='5' />
            <option value='6' />
            <option value='7' />
          </datalist>
        </div>
      </label>
    </div>
  );
};

export default Key;
