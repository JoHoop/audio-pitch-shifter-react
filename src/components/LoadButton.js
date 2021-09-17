import React, { Fragment } from 'react';
import { styled } from '@mui/material/styles';
import { usePlayer } from './PlayerContext';

const Input = styled('input')({
  display: 'none',
});

const CoverImage = styled('div')({
  width: 100,
  height: 100,
  objectFit: 'cover',
  overflow: 'hidden',
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: 'rgba(0,0,0,0.08)',
  '& > img': {
    width: '100%',
  },
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
        <CoverImage>
          <img alt='Upload audio file' src='/static/images/cover.png' />
        </CoverImage>
      </label>
    </Fragment>
  );
};
