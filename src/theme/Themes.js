import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export const primary = '#00bfbf';
export const black = '#111111';
export const white = '#fafafa';

export const LightTheme = responsiveFontSizes(
  createTheme({
    palette: {
      type: 'light',
      mode: 'light',
      primary: {
        main: primary,
      },
      background: white,
      color: black,
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          body: {
            color: black,
            backgroundColor: white,
          },
        },
      },
    },
  })
);

export const DarkTheme = responsiveFontSizes(
  createTheme({
    palette: {
      type: 'dark',
      mode: 'dark',
      primary: {
        main: primary,
      },
      background: black,
      color: white,
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          body: {
            color: white,
            backgroundColor: black,
          },
        },
      },
    },
  })
);
