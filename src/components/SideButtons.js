import ArrowUp from '@mui/icons-material/KeyboardArrowUp';
import DoubleArrowUp from '@mui/icons-material/KeyboardDoubleArrowUp';
import Undo from '@mui/icons-material/Undo';
import { Button, Box, Grid } from '@mui/material';

export default function SideButtons(props) {
  const {
    color,
    undo,
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
        transform: rotate ? 'rotate(180deg)' : 'none',
        '& div': {
          my: 1,
        }
      }}
    >
      <Grid item>
        <Button
          onClick={undo}
          color={color}
          sx={{ px: 1 }}
          variant='contained'
        >
          <Undo />
        </Button>
      </Grid>
      <Grid item>
        <Box sx={{
          color: 'text.main',
          border: '1px solid',
          borderColor: 'text.main',
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
          variant='contained'
        >
          5
        </Button>
      </Grid>
      <Grid item>
        <Button
          onClick={() => updatePegs(side, 1)}
          startIcon={<ArrowUp />}
          color={color}
          variant='contained'
        >
          1
        </Button>
      </Grid>
    </Grid>
  );
}
