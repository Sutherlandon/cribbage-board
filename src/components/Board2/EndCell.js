import Box from '@mui/material/Box';
import Cell from './Cell';

export default function EndCell(props) {
  const {
    index,
    rightPos,
    leftPos,
  } = props;

  // default mixed
  let hasPeg;
  let borderColors = {
    borderTopColor: 'secondary.main',
    borderRightColor: 'secondary.main',
    borderLeftColor: 'primary.main',
    borderBottomColor: 'primary.main',
  }

  // right wins, all primary
  if ([rightPos.p1, rightPos.p2].includes(index)) {
    hasPeg = 'primary';
    borderColors = { borderColor: 'primary.main' };
  }

  // left wins, all secondary
  if ([leftPos.p1, leftPos.p2].includes(index)) {
    hasPeg = 'secondary';
    borderColors = { borderColor: 'secondary.main' };
  }

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      marginLeft: '16px',
    }}>
      <Cell
        color={hasPeg}
        hasPeg={Boolean(hasPeg)}
        sx={{
          backgroundColor: 'inherit',
          borderWidth: '2px',
          borderRadius: '30px',
          ...borderColors,
          height: '16px',
          marginRight: '8px',
          marginLeft: '5px',
          width: '16px',
        }}
      />
    </Box>
  );
}
