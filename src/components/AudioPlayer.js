import React from 'react';
import { LoadButton } from './LoadButton';
import { usePlayer } from './PlayerContext';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';

const WallPaper = styled('div')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  overflow: 'hidden',
  zIndex: -1,
  background: 'linear-gradient(rgb(255, 38, 142) 0%, rgb(255, 105, 79) 100%)',
  transition: 'all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s',
  '&:before': {
    content: '""',
    width: '140%',
    height: '140%',
    position: 'absolute',
    top: '-40%',
    right: '-50%',
    background:
      'radial-gradient(at center center, rgb(62, 79, 249) 0%, rgba(62, 79, 249, 0) 64%)',
  },
  '&:after': {
    content: '""',
    width: '140%',
    height: '140%',
    position: 'absolute',
    bottom: '-50%',
    left: '-30%',
    background:
      'radial-gradient(at center center, rgb(247, 237, 225) 0%, rgba(247, 237, 225, 0) 70%)',
    transform: 'rotate(30deg)',
  },
});

const Widget = styled('div')(({ theme }) => ({
  padding: 16,
  borderRadius: 16,
  width: 343,
  maxWidth: '100%',
  margin: 'auto',
  position: 'relative',
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.4)',
  backdropFilter: 'blur(40px)',
}));

const TinyText = styled(Typography)({
  fontSize: '0.75rem',
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

export const AudioPlayer = () => {
  const theme = useTheme();

  const { loading, playing, pause, play, fileTags } = usePlayer();
  const {
    volume,
    semitone,
    pitch,
    tempo,
    changeVolume,
    changeSemitone,
    changePitch,
    changeTempo,
  } = usePlayer();
  const { playHead, duration, progress, resetPlayHead } = usePlayer();
  const onClick = (event, value) => {
    if (duration !== '0:00') {
      resetPlayHead(value / 100);
    }
  };

  const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';

  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <Widget>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LoadButton />
          <Box sx={{ ml: 1.5, minWidth: 0 }}>
            <Typography
              variant='caption'
              color='text.secondary'
              fontWeight={500}
            >
              {fileTags.artist}
            </Typography>
            <Typography noWrap>
              <b>{fileTags.title}</b>
            </Typography>
            <Typography noWrap letterSpacing={-0.25}>
              {fileTags.album}, {fileTags.year}
            </Typography>
          </Box>
        </Box>

        <Slider
          aria-label='time-indicator'
          size='small'
          value={progress}
          min={0}
          step={1}
          max={100}
          onChange={onClick}
          sx={{
            color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
            height: 4,
            '& .MuiSlider-thumb': {
              width: 8,
              height: 8,
              color:
                theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
              transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
              '&:before': {
                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
              },
              '&:hover, &.Mui-focusVisible': {
                boxShadow: `0px 0px 0px 8px ${
                  theme.palette.mode === 'dark'
                    ? 'rgb(255 255 255 / 16%)'
                    : 'rgb(0 0 0 / 16%)'
                }`,
              },
              '&.Mui-active': {
                width: 20,
                height: 20,
              },
            },
            '& .MuiSlider-rail': {
              opacity: 0.28,
            },
          }}
        />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mt: -2,
          }}
        >
          <TinyText>{playHead}</TinyText>
          <TinyText>{duration}</TinyText>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mt: -1,
          }}
        >
          <IconButton
            onClick={(event, value) => resetPlayHead(0)}
            aria-label='previous song'
          >
            <FastRewindRounded fontSize='large' htmlColor={mainIconColor} />
          </IconButton>
          <IconButton
            aria-label={!playing ? 'play' : 'pause'}
            disabled={loading}
            onClick={() => (!playing ? play() : pause())}
          >
            {!playing ? (
              <PlayArrowRounded
                sx={{ fontSize: '3rem' }}
                htmlColor={mainIconColor}
              />
            ) : (
              <PauseRounded
                sx={{ fontSize: '3rem' }}
                htmlColor={mainIconColor}
              />
            )}
          </IconButton>
          <IconButton
            onClick={(event, value) => resetPlayHead(0)}
            aria-label='next song'
          >
            <FastForwardRounded fontSize='large' htmlColor={mainIconColor} />
          </IconButton>
        </Box>

        <Slider
          aria-label='Volume'
          size='small'
          value={volume}
          onChange={changeVolume}
          step={0.01}
          min={0.0}
          max={3.0}
          marks={[{ value: 1.0 }]}
          track={false}
          sx={{
            color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
            height: 4,
            '& .MuiSlider-thumb': {
              width: 8,
              height: 8,
              color:
                theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
              transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
              '&:before': {
                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
              },
              '&:hover, &.Mui-focusVisible': {
                boxShadow: `0px 0px 0px 8px ${
                  theme.palette.mode === 'dark'
                    ? 'rgb(255 255 255 / 16%)'
                    : 'rgb(0 0 0 / 16%)'
                }`,
              },
              '&.Mui-active': {
                width: 20,
                height: 20,
              },
            },
            '& .MuiSlider-rail': {
              opacity: 0.28,
            },
            '& .MuiSlider-mark': {
              height: 8,
              '&.MuiSlider-markActive': {
                backgroundColor:
                  theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
              },
            },
          }}
        />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mt: -2,
          }}
        >
          <TinyText>Volume:</TinyText>
          <TinyText>{Math.round(volume * 100)} %</TinyText>
        </Box>

        <Slider
          aria-label='Key'
          size='small'
          value={semitone}
          onChange={changeSemitone}
          step={1}
          min={-12}
          max={12}
          marks={[{ value: 0 }]}
          track={false}
          sx={{
            color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
            height: 4,
            '& .MuiSlider-thumb': {
              width: 8,
              height: 8,
              color:
                theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
              transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
              '&:before': {
                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
              },
              '&:hover, &.Mui-focusVisible': {
                boxShadow: `0px 0px 0px 8px ${
                  theme.palette.mode === 'dark'
                    ? 'rgb(255 255 255 / 16%)'
                    : 'rgb(0 0 0 / 16%)'
                }`,
              },
              '&.Mui-active': {
                width: 20,
                height: 20,
              },
            },
            '& .MuiSlider-rail': {
              opacity: 0.28,
            },
            '& .MuiSlider-mark': {
              height: 8,
              '&.MuiSlider-markActive': {
                backgroundColor:
                  theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
              },
            },
          }}
        />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mt: -2,
          }}
        >
          <TinyText>Key:</TinyText>
          <TinyText>
            {semitone >= 0 ? '+' : '-'}
            {Math.abs(semitone)} semitones
          </TinyText>
        </Box>

        <Slider
          aria-label='Pitch'
          size='small'
          value={pitch}
          onChange={changePitch}
          step={0.01}
          min={0.5}
          max={2.0}
          marks={[{ value: 1.0 }]}
          track={false}
          sx={{
            color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
            height: 4,
            '& .MuiSlider-thumb': {
              width: 8,
              height: 8,
              color:
                theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
              transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
              '&:before': {
                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
              },
              '&:hover, &.Mui-focusVisible': {
                boxShadow: `0px 0px 0px 8px ${
                  theme.palette.mode === 'dark'
                    ? 'rgb(255 255 255 / 16%)'
                    : 'rgb(0 0 0 / 16%)'
                }`,
              },
              '&.Mui-active': {
                width: 20,
                height: 20,
              },
            },
            '& .MuiSlider-rail': {
              opacity: 0.28,
            },
            '& .MuiSlider-mark': {
              height: 8,
              '&.MuiSlider-markActive': {
                backgroundColor:
                  theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
              },
            },
          }}
        />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mt: -2,
          }}
        >
          <TinyText>Pitch:</TinyText>
          <TinyText>
            {pitch >= 1.0 ? '+' : '-'}
            {Math.abs(100 - Math.round(pitch * 100))} %
          </TinyText>
        </Box>

        <Slider
          aria-label='Tempo'
          size='small'
          value={tempo}
          onChange={changeTempo}
          step={0.01}
          min={0.3}
          max={2.0}
          marks={[{ value: 1.0 }]}
          track={false}
          sx={{
            color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
            height: 4,
            '& .MuiSlider-thumb': {
              width: 8,
              height: 8,
              color:
                theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
              transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
              '&:before': {
                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
              },
              '&:hover, &.Mui-focusVisible': {
                boxShadow: `0px 0px 0px 8px ${
                  theme.palette.mode === 'dark'
                    ? 'rgb(255 255 255 / 16%)'
                    : 'rgb(0 0 0 / 16%)'
                }`,
              },
              '&.Mui-active': {
                width: 20,
                height: 20,
              },
            },
            '& .MuiSlider-rail': {
              opacity: 0.28,
            },
            '& .MuiSlider-mark': {
              height: 8,
              '&.MuiSlider-markActive': {
                backgroundColor:
                  theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
              },
            },
          }}
        />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mt: -2,
          }}
        >
          <TinyText>Tempo:</TinyText>
          <TinyText>
            {tempo >= 1.0 ? '+' : '-'}
            {Math.abs(100 - Math.round(tempo * 100))} %
          </TinyText>
        </Box>
      </Widget>
      <WallPaper />
    </Box>
  );
};
