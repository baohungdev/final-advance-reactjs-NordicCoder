import { theme as chakraTheme } from '@chakra-ui/core';

export const theme = {
  ...chakraTheme,
  fonts: {
    body: 'Open Sans Condensed, sans-serif',
    heading: 'Open Sans Condensed, sans-serif',
    mono: 'Open Sans Condensed, sans-serif',
  },
  colors: {
    ...chakraTheme.colors,
    primary: {
      50: '#e6e6ff',
      100: '#189EFF',
      200: '#8889f7',
      300: '#595af2',
      400: '#2b2bed',
      500: '#1212d4',
      600: '#0b0da6',
      700: '#060978',
      800: '#02054a',
      900: '#00011f',
    },
    secondary: {
      50: '#ffe2ff',
      100: '#f4b1ff',
      200: '#eb7fff',
      300: '#e14cff',
      400: '#d91aff',
      500: '#bf00e6',
      600: '#9500b4',
      700: '#6b0081',
      800: '#410050',
      900: '#18001f',
    },
  },
};
