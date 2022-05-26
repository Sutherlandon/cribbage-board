import ArrowUp from '@mui/icons-material/KeyboardArrowUp';
import ArrowDown from '@mui/icons-material/KeyboardArrowDown';
import DoubleArrowUp from '@mui/icons-material/KeyboardDoubleArrowUp';
import DoubleArrowDown from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Box, Grid, Typography } from '@mui/material';
import { useState } from 'react';

import Button from './components/CustomButton';
import Board from './components/Board';

const blankSide = { score: 0, p1: 0, p2: 1 };

function App() {
  const [movedLast, setMovedLast] = useState();
  const [redSide, setRedSide] = useState(blankSide);
  const [blueSide, setBlueSide] = useState(blankSide);

  function reset() {
    setRedSide(blankSide);
    setBlueSide(blankSide);
  }

  function updatePegs(side, plusValue) {
    let update;
    // get the starting state
    if (side === 'red') {
      update = { ...redSide };
    } else {
      update = { ...blueSide };
    }

    // make the updates
    update.score += plusValue;

    // repeated moves increment the forward most peg
    if (movedLast === side) {
      if (update.p1 > update.p2) {
        update.p1 += plusValue;
      } else {
        update.p2 += plusValue;
      }
    } else {
      // bring the one from behind
      if (update.p1 < update.p2) {
        update.p1 = update.p2 + plusValue;
      } else {
        update.p2 = update.p1 + plusValue;
      }
    }

    // zero is the floor
    if (update.p1 < 0) update.p1 = 0;
    if (update.p2 < 0) update.p2 = 0;
    // 120 is the ceiling
    if (update.p1 > 120) update.p1 = 120;
    if (update.p2 > 120) update.p2 = 120;

    // commit updates
    if (side === 'red') {
      setRedSide(update);
    } else {
      setBlueSide(update);
    }

    setMovedLast(side);
  }

  return (
    <div className="App">
      <Box sx={{ textAlign: 'center', color: '#dfdfdf' }}>
        <Typography variant='h4'>Cribbage</Typography>
      </Box>
      <Grid container justifyContent='center'>
        <Grid item>
          <Grid
            container
            spacing={2}
            justifyContent='center'
            direction='column'
            sx={{ padding: 2 }}
          >
            <Grid item>
              <Button
                onClick={() => updatePegs('blue', 5)}
                startIcon={<DoubleArrowUp />}
              >
                5
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={() => updatePegs('blue', 1)}
                startIcon={<ArrowUp />}
              >
                1
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={() => updatePegs('blue', -1)}
                startIcon={<ArrowDown />}
              >
                1
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={() => updatePegs('blue', -5)}
                startIcon={<DoubleArrowDown />}
              >
                5
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Board redPos={redSide} bluePos={blueSide} />
        </Grid>
        <Grid item>
          <Grid
            container
            spacing={2}
            justifyContent='center'
            direction='column'
            sx={{ padding: 2 }}
          >
            <Grid item>
              <Button
                onClick={() => updatePegs('red', 5)}
                startIcon={<DoubleArrowUp />}
                color='secondary'
              >
                5
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={() => updatePegs('red', 1)}
                startIcon={<ArrowUp />}
                color='secondary'
              >
                1
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={() => updatePegs('red', -1)}
                startIcon={<ArrowDown />}
                color='secondary'
              >
                1
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={() => updatePegs('red', -5)}
                startIcon={<DoubleArrowDown />}
                color='secondary'
              >
                5
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: 'center' }}>
        <Button onClick={reset}>Reset</Button>
      </Box>
    </div>
  );
}

export default App;
