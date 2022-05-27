import ArrowUp from '@mui/icons-material/KeyboardArrowUp';
import ArrowDown from '@mui/icons-material/KeyboardArrowDown';
import DoubleArrowUp from '@mui/icons-material/KeyboardDoubleArrowUp';
import DoubleArrowDown from '@mui/icons-material/KeyboardDoubleArrowDown';
import Cached from '@mui/icons-material/Cached';
import { Box, Grid, Typography } from '@mui/material';
import { useState } from 'react';

import Button from './components/CustomButton';
import Board from './components/Board';

const blankSide = { score: 0, p1: 0, p2: 1 };

function App() {
  const [movedLast, setMovedLast] = useState();
  const [redSide, setRedSide] = useState(blankSide);
  const [blueSide, setBlueSide] = useState(blankSide);
  const [rotate, setRotate] = useState(true);

  function reset() {
    if (window.confirm('Are you sure?')) {
      setRedSide(blankSide);
      setBlueSide(blankSide);
    }
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
    if (update.score < 0) update.score = 0;

    // 120 is the ceiling
    if (update.p1 > 120) update.p1 = 120;
    if (update.p2 > 120) update.p2 = 120;
    if (update.score > 120) update.score = 120;

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
      <Box sx={{ color: '#dfdfdf' }}>
        <Grid
          container
          justifyContent='space-between'
          flexWrap='nowrap'
          sx={{
            width: 460,
            margin: '16px auto 0',
           }}
        >
          <Grid item sx={{ width: 'content' }}>
            <Typography variant='h4'>Cribbage</Typography>
          </Grid>
          <Grid item sx={{ marginRight: '-100px' }}>
            <Button onClick={reset} variant='text'>Reset</Button>
            <Button onClick={() => setRotate(!rotate)} variant='text' startIcon={<Cached />} />
          </Grid>
        </Grid>
      </Box>
      <Grid container justifyContent='center' alignItems='center'>
        <Grid item>
          <Grid
            container
            justifyContent='center'
            alignItems='center'
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
              <Box sx={{
                color: '#dfdfdf',
                border: '1px solid #dfdfdf',
                borderRadius: 1,
                padding: '0 4px 2px 4px',
                my: 1,
                width: 30,
                textAlign: 'center',
              }}>
                {blueSide.score}
              </Box>
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
            justifyContent='center'
            alignItems='center'
            direction='column'
            sx={{
              padding: 2,
              transform: rotate ? 'rotate(180deg)' : 'none'
            }}
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
              <Box sx={{
                color: '#dfdfdf',
                border: '1px solid #dfdfdf',
                borderRadius: 1,
                my: 1,
                padding: '0 4px 2px 4px',
                width: 30,
                textAlign: 'center',
              }}>
                {redSide.score}
              </Box>
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
    </div>
  );
}

export default App;
