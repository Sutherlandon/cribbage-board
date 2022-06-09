import ArrowUp from '@mui/icons-material/KeyboardArrowUp';
import ArrowDown from '@mui/icons-material/KeyboardArrowDown';
import DoubleArrowUp from '@mui/icons-material/KeyboardDoubleArrowUp';
import DoubleArrowDown from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Box, Grid } from '@mui/material';

import Button from './CustomButton';

export default function SideButtons(props) {
  const {
    color,
    updatePegs,
    rotate,
    score,
    side,
  } = props;

  return (
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
        <Box sx={{
          color: '#dfdfdf',
          border: '1px solid #dfdfdf',
          borderRadius: 1,
          my: 1,
          padding: '0 4px 2px 4px',
          width: 30,
          textAlign: 'center',
        }}>
          {score}
        </Box>
      </Grid>
      <Grid item>
        <Button
          onClick={() => updatePegs(side, 5)}
          startIcon={<DoubleArrowUp />}
          color={color}
        >
          5
        </Button>
      </Grid>
      <Grid item>
        <Button
          onClick={() => updatePegs(side, 1)}
          startIcon={<ArrowUp />}
          color={color}
        >
          1
        </Button>
      </Grid>
      <Grid item>
        <Button
          onClick={() => updatePegs(side, -1)}
          startIcon={<ArrowDown />}
          color={color}
        >
          1
        </Button>
      </Grid>
      <Grid item>
        <Button
          onClick={() => updatePegs(side, -5)}
          startIcon={<DoubleArrowDown />}
          color={color}
        >
          5
        </Button>
      </Grid>
    </Grid>
  );
}
