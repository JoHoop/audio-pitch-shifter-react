import React, { Fragment, useState } from 'react';
import { styled } from '@mui/material/styles';
import { usePlayer } from './PlayerContext';
import * as id3 from 'id3js';

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
  const { loadFile, setFileTags } = usePlayer();
  const [cover, setCover] = useState('/logo512.png');
  const onChange = ({
    target: {
      files: [file],
      value,
    },
  }) => {
    const fileTest = /(.mp3)$/i.test(value);
    if (fileTest) {
      loadFile(file);
      id3
        .fromFile(file)
        .then((tags) => {
          const title = tags.title || 'Title';
          const artist = tags.artist || 'Artist';
          const album = tags.album || 'Album';
          const year = tags.year || 'Year';
          const image = tags.images[0];
          if (image && image.data) {
            const blob = new Blob([image.data]);
            const url = URL.createObjectURL(blob) || '/logo512.png';
            setCover(url);
          }
          const fileTags = { title, artist, album, year };
          setFileTags(fileTags);
        })
        .catch((error) => {});
    } else {
      window.alert('Please upload files in .mp3 format only');
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
          <img src={cover} alt='Upload audio file' />
        </CoverImage>
      </label>
    </Fragment>
  );
};
