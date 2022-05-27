import { useTheme } from '@mui/material';

import dotImage from '../images/dot.png';
import { board1 } from '../board1';

function Cell({ color, hasPeg, btmBorder }) {
  const borderColor = 'gray';
  const style = {
    backgroundColor: color,
    backgroundImage: hasPeg && `url(${dotImage})`,
    backgroundSize: '16px 16px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    border: `1px solid ${borderColor}`,
    borderBottomColor: btmBorder ? 'black' : borderColor,
    borderBottomWidth: btmBorder ? '2px' : '1px',
    width: '20px',
    height: '20px',
    textAlign: 'center',
  }

  return <td style={style}></td>
}

export default function Board({ redPos, bluePos }) {
  const theme = useTheme();
  const { redCells, blueCells } = board1;

  // get the coordinates of the pins
  const redP1 = redCells[redPos.p1].split(',')
  const redP2 = redCells[redPos.p2].split(',')
  const blueP1 = blueCells[bluePos.p1].split(',')
  const blueP2 = blueCells[bluePos.p2].split(',')

  let rows = [];
  for(let row = 0; row < 12; row++) {

    let cells = [];
    for(let col = 0; col < 20; col++) {

      let color;
      let hasPeg = false;
      let btmBorder = false;

      if (redCells.includes(`${row},${col}`)) {
        color = theme.palette.secondary.main;
      }

      if (blueCells.includes(`${row},${col}`)) {
        color = theme.palette.primary.main;
      }

      // if the current cell reflects the position of a peg
      if (
        (`${row}` === redP1[0] && `${col}` === redP1[1])
        || (`${row}` === redP2[0] && `${col}` === redP2[1])
        || (`${row}` === blueP1[0] && `${col}` === blueP1[1])
        || (`${row}` === blueP2[0] && `${col}` === blueP2[1])
      ){
        hasPeg = true
      }

      // calculate borders
      if (
        ([1, 5, 9].includes(row) && col < 18 ) ||
        ([3, 7].includes(row) && col > 1)
      ) {
        btmBorder = true;
      }

      cells.push(
        <Cell
          color={color}
          hasPeg={hasPeg}
          btmBorder={btmBorder}
          key={`${row},${col}`}
        />
      );
    }

    rows.push(<tr key={`${row}`}>{cells}</tr>);
  }

  return (
    <table style={{
      borderCollapse: 'collapse',
      border: '2px solid black'
    }}>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}