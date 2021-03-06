import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ThemeToggle } from '../theme/ThemeToggle';
import GitHubIcon from '@mui/icons-material/GitHub';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: 'transparent',
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  iconButton: {
    height: '2.5rem',
    width: '2.5rem',
  },
  icon: {
    fontSize: '1.25rem',
  },
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <AppBar
      position='static'
      color='default'
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <Typography
          variant='h6'
          color='inherit'
          noWrap
          className={classes.toolbarTitle}
        >
          Audio Pitch Shifter
        </Typography>
        <nav>
          <ThemeToggle />

          <IconButton
            color='inherit'
            aria-label={'GitHub Repo'}
            className={classes.iconButton}
            href='https://github.com/JoHoop/audio-pitch-shifter-react'
            target='_blank'
            rel='noreferrer'
          >
            <GitHubIcon className={classes.icon} />
          </IconButton>
        </nav>
      </Toolbar>
    </AppBar>
  );
};
