import { createTheme } from "@mui/material";

import peg_black from './images/peg_black.svg';
import peg_topper_primary from './images/peg_topper_primary.svg';
import peg_topper_secondary from './images/peg_topper_secondary.svg';
import peg_seafoam_primary from './images/peg_seafoam_primary.svg';
import peg_seafoam_secondary from './images/peg_seafoam_secondary.svg';

// board is colored and pegs are black
const themes = {
  // board is neutral and pegs are colored
  'Dark Pegs': createTheme({
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
      text: {
        main: 'white',
      }
    },
    pegs: {
      primary: peg_topper_primary,
      secondary: peg_topper_secondary,
    }
  }),

  'Dark Board': createTheme({
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
      text: {
        main: 'white',
      }
    },
    pegs: {
      primary: peg_black,
      secondary: peg_black,
    }
  }),

  'Light Pegs': createTheme({
    palette: {
      primary: {
        main: '#00ff00',
        background: '#bababa',
      },
      secondary: {
        main: '#00d0ff',
        background: '#dadada',
      },
      background: { main: '#f9f9f9' },
      border: { main: '#707070' },
      skunk: { main: 'red' },
      skunk2: { main: 'red' },
      text: {
        main: 'black',
      }
    },
    pegs: {
      primary: peg_seafoam_primary,
      secondary: peg_seafoam_secondary,
    }
  }),

  'Light Board': createTheme({
    palette: {
      primary: {
        main: '#00ff00',
        background: '#00ff00',
      },
      secondary: {
        main: '#00d0ff',
        background: '#00d0ff',
      },
      background: { main: '#f9f9f9' },
      border: { main: '#616161' },
      skunk: { main: 'red' },
      skunk2: { main: 'red' },
      text: {
        main: 'black',
      }
    },
    pegs: {
      primary: peg_black,
      secondary: peg_black,
    }
  }),
}

export default themes
