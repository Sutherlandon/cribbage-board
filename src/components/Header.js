import Cached from '@mui/icons-material/Cached';
import {
  Box,
  Button,
  Grid,
  IconButton,
  Typography
} from '@mui/material';

export default function Header(props) {
  const { reset, rotate, setRotate } = props;

  function RotateButton({ side }) {
    const sx = {
      left: { ml: '13px', mr: '38px', mt: '6px' },
      right: { ml: '28px', mr: '13px', mt: '6px' },
    }
    return (
      <IconButton
        color='primary'
        onClick={() => setRotate({ ...rotate, [side]: !rotate[side] })}
        sx={sx[side]}
      >
        <Cached />
      </IconButton>
    );
  }

  return (
    <Box sx={{ color: '#dfdfdf' }}>
      <Grid
        container
        flexWrap='nowrap'
        alignItems='center'
        sx={{
          width: 564,
          margin: '16px auto 0',
        }}
      >
        <Grid item>
          <RotateButton side='left' />
        </Grid>
        <Grid item sx={{ width: 'content' }}>
          <Typography variant='h5'>Cribbage</Typography>
        </Grid>
        <Grid item sx={{ flexGrow: 1 }} />
        <Grid item>
          <Button
            color='secondary'
            variant='outlined'
            onClick={reset}
            sx={{ mt: 1 }}
          >
              Reset
          </Button>
        </Grid>
        <Grid item>
          <RotateButton side='right' />
        </Grid>
      </Grid>
    </Box>
  );

}