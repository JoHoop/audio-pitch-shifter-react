import React from 'react';
import { Header } from '../components/Header';
import { AudioPlayer } from '../components/AudioPlayer';
import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
}));

export const Landing = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Container maxWidth='md' component='main' className={classes.main}>
        <AudioPlayer />
      </Container>
    </div>
  );
};
