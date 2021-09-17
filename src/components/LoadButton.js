import React, { Fragment } from 'react';
import { usePlayer } from './PlayerContext';

const LoadButton = () => {
  const { loadFile } = usePlayer();
  const onChange = ({
    target: {
      files: [file],
      value,
    },
  }) => {
    const fileTest = /(.mp3)$/i.test(value);
    if (fileTest) {
      loadFile(file);
    } else {
      window.alert('you can only load an mp3 file');
    }
  };
  return (
    <Fragment>
      <label>
        <input type='file' onChange={onChange} /> Load MP3
      </label>
    </Fragment>
  );
};

export default LoadButton;
