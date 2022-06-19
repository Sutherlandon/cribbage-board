import { Grid, } from '@mui/material';
import { useState } from 'react';
import last from 'lodash.last';

import Board from './components/Board2';
import Header from './components/Header';
import SideButtons from './components/SideButtons';

const blankSide = [{ score: 0, p1: -2, p2: -1 }];

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
    let newPos;
    // get the starting state
    if (side === 'left') {
      newPos = { ...last(leftSide) };
    } else {
      newPos = { ...last(rightSide) };
    }

    // make the newPoss
    newPos.score += plusValue;

    // repeated moves increment the forward most peg
    if (movedLast === side) {
      if (newPos.p1 > newPos.p2) {
        newPos.p1 += plusValue;
      } else {
        newPos.p2 += plusValue;
      }
    } else {
      // bring the one from behind
      if (newPos.p1 < newPos.p2) {
        newPos.p1 = newPos.p2 + plusValue;
      } else {
        newPos.p2 = newPos.p1 + plusValue;
      }
    }

    // 120 is the ceiling
    if (newPos.p1 > 119) newPos.p1 = 119;
    if (newPos.p2 > 119) newPos.p2 = 119;
    if (newPos.score > 120) newPos.score = 120;

    // commit updates
    if (side === 'left') {
      const leftUpdate = [...leftSide];
      leftUpdate.push(newPos);
      setLeftSide(leftUpdate);
    } else {
      const rightUpdate = [...rightSide];
      rightUpdate.push(newPos);
      setRightSide(rightUpdate);
    }

    setMovedLast(side);
  }

  /**
   * Pop off the last position so the previous position becomes
   * the current position. 
   * @param {String} side Which side to affect, 'left' or 'right
   */
  function undoMove(side) {
    if (side === 'left' && leftSide.length > 1) {
      const leftUpdate = [...leftSide];
      leftUpdate.pop();
      setLeftSide(leftUpdate);
    } else if (rightSide.length > 1) {
      const rightUpdate = [...rightSide];
      rightUpdate.pop();
      setRightSide(rightUpdate);
    }
  }

  // get the current position off the stack
  const leftPos = last(leftSide);
  const rightPos = last(rightSide);

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
            undo={() => undoMove('left')}
            rotate={rotate.left}
            score={leftPos.score}
            side='left'
          />
        </Grid>
        <Grid item>
          <Board leftPos={leftPos} rightPos={rightPos} />
        </Grid>
        <Grid item>
          <SideButtons
            color='primary'
            updatePegs={updatePegs}
            undo={() => undoMove('right')}
            rotate={rotate.right}
            score={rightPos.score}
            side='right'
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
