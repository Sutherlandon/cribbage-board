import { createTheme } from "@mui/material";

import peg_black from './images/peg_black.svg';
// import peg_red from './images/peg_red.svg';
// import peg_blue from './images/peg_blue.svg';
import peg_topper_primary from './images/peg_topper_primary.svg';
import peg_topper_secondary from './images/peg_topper_secondary.svg';

// export const theme = createTheme({
//   palette: {
//     primary: { main: '#b2ff59' },
//     secondary: { main: '#c2185b' },
//   }
// });

export const Board = createTheme({
  palette: {
    primary: {
      main: '#e4de07',
      background: '#e4de07',
    },
    secondary: {
      main: '#86e080',
      background: '#86e080',
    },
    background: { main: '#2a2a2a' },
    border: { main: '#828282' },
    skunk: { main: 'red' },
    skunk2: { main: 'red' },
  },
  pegs: {
    primary: peg_black,
    secondary: peg_black,
  }
});

export const Pegs = createTheme({
  palette: {
    primary: {
      main: '#e4de07',
      background: '#5a5a5a',
    },
    secondary: {
      main: '#86e080',
      background: '#5a5a5a',
    },
    background: { main: '#2a2a2a' },
    border: { main: '#404040' },
    skunk: { main: '#07e4dd' },
    skunk2: { main: '#07e4dd' },
  },
  pegs: {
    primary: peg_topper_primary,
    secondary: peg_topper_secondary,
  }
});