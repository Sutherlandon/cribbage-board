import Box from '@mui/material/Box';
import Cell from './Cell';

export default function EndCell(props) {
  const {
    index,
    rightPos,
    leftPos,
  } = props;

  // default mixed
  let hasPeg = false;
  let borderColors = {
    borderTopColor: 'secondary.main',
    borderRightColor: 'secondary.main',
    borderLeftColor: 'primary.main',
    borderBottomColor: 'primary.main',
  }

  // right wins, all primary
  if ([rightPos.p1, rightPos.p2].includes(index)) {
    hasPeg = true;
    borderColors = { borderColor: 'primary.main' };
  }

  // left wins, all secondary
  if ([leftPos.p1, leftPos.p2].includes(index)) {
    hasPeg = true;
    borderColors = { borderColor: 'secondary.main' };
  }

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      marginLeft: '17px',
    }}>
      <Cell
        sx={{
          borderRadius: '30px',
          marginRight: '8px',
          marginLeft: '5px',
          borderWidth: '2px',
          ...borderColors,
        }}
        hasPeg={hasPeg}
      />
    </Box>
  );
}
