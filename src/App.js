import { Grid, } from '@mui/material';
import { useState } from 'react';

import Board from './components/Board';
import Header from './components/Header';
import SideButtons from './components/SideButtons';

const blankSide = { score: 2, p1: 0, p2: 1 };

function App() {
  const [movedLast, setMovedLast] = useState();
  const [leftSide, setLeftSide] = useState(blankSide);
  const [rightSide, setRightSide] = useState(blankSide);
  const [rotate, setRotate] = useState({ left: true, right: false });

  function reset() {
    if (window.confirm('Are you sure?')) {
      setLeftSide(blankSide);
      setRightSide(blankSide);
    }
  }

  function updatePegs(side, plusValue) {
    let update;
    // get the starting state
    if (side === 'left') {
      update = { ...leftSide };
    } else {
      update = { ...rightSide };
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
    if (update.p2 < 1) update.p2 = 1;
    if (update.score < 2) update.score = 2;

    // 120 is the ceiling
    if (update.p1 > 119) update.p1 = 119;
    if (update.p2 > 119) update.p2 = 119;
    if (update.score > 120) update.score = 120;

    // commit updates
    if (side === 'left') {
      setLeftSide(update);
    } else {
      setRightSide(update);
    }

    setMovedLast(side);
  }


  return (
    <div className="App">
      <Header
        rotate={rotate}
        setRotate={setRotate}
        reset={reset}
      />
      <Grid container justifyContent='center' alignItems='center'>
        <Grid item>
          <SideButtons
            color='secondary'
            updatePegs={updatePegs}
            rotate={rotate.left}
            score={leftSide.score}
            side='left'
          />
        </Grid>
        <Grid item>
          <Board redPos={leftSide} bluePos={rightSide} />
        </Grid>
        <Grid item>
          <SideButtons
            color='primary'
            updatePegs={updatePegs}
            rotate={rotate.right}
            score={rightSide.score}
            side='right'
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
