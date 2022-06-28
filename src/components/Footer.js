import {
  Grid,
  Link,
  Typography,
} from '@mui/material';

export default function Footer(props) {
  return (
    <Grid
      container
      justifyContent='space-around'
      alignItems='center'
      sx={{ width: 400, mx: 'auto' }}
    >
      <Grid item>
        <Typography variant='body1' color='text.main'>
          Made by <Link
            href='https://sutherlandon.com'
            target='_'
            sx={{ color: 'primary.main' }}
          >
            Sutherlandon
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );

}