/**
 * Rules:
 *    row 1 & 12 - blue
 *    row 2 - 11 alternate two at a time starting with red
 *    red overrides - (0,1) (0,2) (0,5) (0,6) (0,9) (0,10)
 *    blue overrides - (20,0) (20,12)
 * 
 * green = red
 * yellow = blue
 */
import { useTheme } from '@mui/material';
import dotImage from '../dot.png';

// hard coded map so its easy to paint and track
const redCells = [
  '0,0', '0,1', '0,2', '0,3', '0,4', '0,5', '0,6', '0,7', '0,8', '0,9', '0,10', '0,11', '0,12', '0,13', '0,14', '0,15', '0,16', '0,17', '0,18', '0,19',
  '1,0',
  '2,0',
  '3,0', '3,1', '3,2', '3,3', '3,4', '3,5', '3,6', '3,7', '3,8', '3,9', '3,10', '3,11', '3,12', '3,13', '3,14', '3,15', '3,16', '3,17', '3,18',
  '4,0', '4,1', '4,2', '4,3', '4,4', '4,5', '4,6', '4,7', '4,8', '4,9', '4,10', '4,11', '4,12', '4,13', '4,14', '4,15', '4,16', '4,17', '4,18',
  '5,0',
  '6,0',
  '7,0', '7,1', '7,2', '7,3', '7,4', '7,5', '7,6', '7,7', '7,8', '7,9', '7,10', '7,11', '7,12', '7,13', '7,14', '7,15', '7,16', '7,17', '7,18',
  '8,0', '8,1', '8,2', '8,3', '8,4', '8,5', '8,6', '8,7', '8,8', '8,9', '8,10', '8,11', '8,12', '8,13', '8,14', '8,15', '8,16', '8,17', '8,18',
  '9,0',
  '10,0',
  '11,0', '11,1', '11,2', '11,3', '11,4', '11,5', '11,6', '11,7', '11,8', '11,9', '11,10', '11,11', '11,12', '11,13', '11,14', '11,15', '11,16', '11,17', '11,18', '11,19',
];

const blueCells = [
  '1,1', '1,2', '1,3', '1,4', '1,5', '1,6', '1,7', '1,8', '1,9', '1,10', '1,11', '1,11', '1,12', '1,13', '1,14', '1,15', '1,16', '1,17', '1,18', '1,19',
  '2,1', '2,2', '2,3', '2,4', '2,5', '2,6', '2,7', '2,8', '2,9', '2,10', '2,11', '2,11', '2,12', '2,13', '2,14', '2,15', '2,16', '2,17', '2,18', '2,19',
                                                                                                                                                 '3,19',
                                                                                                                                                 '4,19',
  '5,1', '5,2', '5,3', '5,4', '5,5', '5,6', '5,7', '5,8', '5,9', '5,10', '5,11', '5,11', '5,12', '5,13', '5,14', '5,15', '5,16', '5,17', '5,18', '5,19',
  '6,1', '6,2', '6,3', '6,4', '6,5', '6,6', '6,7', '6,8', '6,9', '6,10', '6,11', '6,11', '6,12', '6,13', '6,14', '6,15', '6,16', '6,17', '6,18', '6,19',
                                                                                                                                                 '7,19',
                                                                                                                                                 '8,19',
  '9,1', '9,2', '9,3', '9,4', '9,5', '9,6', '9,7', '9,8', '9,9', '9,10', '9,11', '9,11', '9,12', '9,13', '9,14', '9,15', '9,16', '9,17', '9,18', '9,19',
  '10,1', '10,2', '10,3', '10,4', '10,5', '10,6', '10,7', '10,8', '10,9', '10,10', '10,11', '10,11', '10,12', '10,13', '10,14', '10,15', '10,16', '10,17', '10,18', '10,19',
];

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

  // reversing the pattern above makes a path
  const redPath = [...redCells].reverse();
  const bluePath = [...blueCells].reverse();

  // get the coordinates of the pins
  const redP1 = redPath[redPos.p1].split(',')
  const redP2 = redPath[redPos.p2].split(',')
  const blueP1 = bluePath[bluePos.p1].split(',')
  const blueP2 = bluePath[bluePos.p2].split(',')

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
        ([1, 5, 9].includes(row) && col > 1) ||
        ([3, 7].includes(row) && col < 18)
      ) {
        btmBorder = true;
      }

      cells.push(<Cell color={color} hasPeg={hasPeg} btmBorder={btmBorder} />);
    }

    rows.push(<tr>{cells}</tr>);
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