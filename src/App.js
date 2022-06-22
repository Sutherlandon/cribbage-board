import last from 'lodash.last';
import debounce from 'lodash.debounce';
import { Grid } from '@mui/material';
import { useCallback, useState } from 'react';

import Board from './components/Board2';
import Header from './components/Header';
import SideButtons from './components/SideButtons';

const blankSide = [{ score: 0, p1: -2, p2: -1 }];

function App() {
  const [leftAdvance, setLeftAdvance] = useState(false);
  const [rightAdvance, setRightAdvance] = useState(false);
  const [leftSide, setLeftSide] = useState(blankSide);
  const [rightSide, setRightSide] = useState(blankSide);
  const [rotate, setRotate] = useState({ left: true, right: false });

  // set's the timeout to bring the back peg forward instead of
  // advancing the forward peg again.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const pinTimeout = useCallback(debounce(() => {
    setLeftAdvance(false);
    setRightAdvance(false);
  }, 3000), []);

  function reset() {
    if (window.confirm('Are you sure?')) {
      setLeftSide(blankSide);
      setRightSide(blankSide);
    }
  }

  function updatePegs(side, plusValue) {
    let newPos, advance;
    // get the starting state
    if (side === 'left') {
      newPos = { ...last(leftSide) };
      advance = leftAdvance;
    } else {
      newPos = { ...last(rightSide) };
      advance = rightAdvance;
    }

    // make the newPoss
    newPos.score += plusValue;

    // repeated moves increment the forward most peg
    if (advance) {
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
    if (newPos.p1 > 120) newPos.p1 = 120;
    if (newPos.p2 > 120) newPos.p2 = 120;
    if (newPos.score > 121) newPos.score = 121;

    // commit updates
    if (side === 'left') {
      const leftUpdate = [...leftSide];
      leftUpdate.push(newPos);
      setLeftSide(leftUpdate);
      setLeftAdvance(true);
    } else {
      const rightUpdate = [...rightSide];
      rightUpdate.push(newPos);
      setRightSide(rightUpdate);
      setRightAdvance(true);
    }

    pinTimeout(side);
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
