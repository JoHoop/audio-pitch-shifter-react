import React, { Fragment } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { usePlayer } from './PlayerContext';

const Input = styled('input')({
  display: 'none',
});

export const LoadButton = () => {
  const { loadFile, setFileName } = usePlayer();
  const onChange = ({
    target: {
      files: [file],
      value,
    },
  }) => {
    const fileTest = /(.mp3)$/i.test(value);
    if (fileTest) {
      setFileName(file.name || 'Unknown title');
      loadFile(file);
    } else {
      window.alert('Please upload only files in .mp3 format');
    }
  };
  return (
    <Fragment>
      <label htmlFor='upload-button'>
        <Input
          type='file'
          accept='audio/*'
          onChange={onChange}
          id='upload-button'
        />
        <Button variant='contained' component='span'>
          Upload
        </Button>
      </label>
    </Fragment>
  );
};
