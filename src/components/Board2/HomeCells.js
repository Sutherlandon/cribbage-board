import { Box } from '@mui/material';
import Cell from './Cell';

export default function HomeCells(props) {
  const { leftPos, rightPos } = props;

  const sx = {
    border: 0,
    margin: '1px',
    backgroundColor: 'inherit',
  };

  return (
    <>
      <Box sx={{ ml: '17px' }}>
        <Cell sx={sx} hasPeg={rightPos.p1 === -2} color='primary' />
        <Cell sx={sx} hasPeg={leftPos.p1 === -2} color='secondary' />
      </Box>
      <Box sx={{ mr: '2px' }}>
        <Cell sx={sx} hasPeg={rightPos.p2 === -1} color='primary' />
        <Cell sx={sx} hasPeg={leftPos.p2 === -1} color='secondary' />
      </Box>
    </>
  );
}