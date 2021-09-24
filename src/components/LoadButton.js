import React, { Fragment, useState } from 'react';
import { styled } from '@mui/material/styles';
import { usePlayer } from './PlayerContext';
import IconButton from '@mui/material/IconButton';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import * as id3 from 'id3js';

const Input = styled('input')({
  display: 'none',
});

export const LoadButton = () => {
  const { loadFile, setFileTags } = usePlayer();
  const handleUpload = ({
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
          const getCover = (img) => {
            if (img && img.data) {
              const blob = new Blob([img.data]);
              return URL.createObjectURL(blob) || '/logo512.png';
            }
          };
          const cover = getCover(image);
          const fileTags = { title, artist, album, year, cover };
          setFileTags(fileTags);
        })
        .catch((error) => {
          console.log(error);
        });
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
          onChange={handleUpload}
          id='upload-button'
        />
        <IconButton component='span'>
          <FileUploadIcon />
        </IconButton>
      </label>
    </Fragment>
  );
};
