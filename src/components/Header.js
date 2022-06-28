import { Cached, Menu } from '@mui/icons-material';
import {
  Box,
  Button,
  Grid,
  Typography
} from '@mui/material';

export default function Header(props) {
  const { setMenuOpen, reset } = props;

  return (
    <Box sx={{ color: '#dfdfdf' }}>
      <Grid
        container
        flexWrap='nowrap'
        alignItems='center'
        sx={{
          width: 400,
          margin: '16px auto 0',
        }}
      >
        <Grid item sx={{ width: 'content' }}>
          <Button
            sx={{ color: 'white', textTransform: 'none' }}
            onClick={() => setMenuOpen(true)}
          >
            <Typography variant='h5' color='text.main'>
              <Menu sx={{
                verticalAlign: 'text-top',
                fontSize: '1.75rem'
              }} /> Cribbage
            </Typography>
          </Button>
        </Grid>
        <Grid item sx={{ flexGrow: 1 }} />
        <Grid item>
          <Button
            color='secondary'
            onClick={reset}
            startIcon={<Cached />}
          >
            Reset
          </Button>
        </Grid>
      </Grid>
    </Box>
  );

}