import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  fontFamily: '"Plus Jakarta Sans", sans-serif;',
  paddingSize: {
    small: '6px 12px',
    medium: '10px 41px',
    large: '12px 82px',
  },
  palette: {
    common: {
      main: '#ab00ea',
      secondary: '#000',
      tertiary: '#fff',
      quaternary: '#1df7ff',
    },
    primary: {
      main: '#ab00ea',
      border: '#000',
      contrastText: '#fff',
    },
    secondary: {
      main: '#000',
      border: '#000',
      contrastText: '#fff',
    },
    tertiary: {
      main: '#1df7ff',
      border: '#000',
      contrastText: '#000',
    },
    quaternary: {
      main: '#fff',
      border: '#000',
      contrastText: '#000',
    },
  },
};
