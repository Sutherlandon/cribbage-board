import { ArrowUpwardRounded, ArrowDownwardRounded } from '@mui/icons-material';
import {
  Box,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";

function Row({ desc, points }) {
  return (
    <TableRow>
      <TableCell
        sx={{
          border: 'none',
          color: 'primary.main',
          padding: 0,
        }}
      >
        {desc}
      </TableCell>
      <TableCell
        sx={{
          border: 'none',
          color: 'primary.main',
          padding: 0,
          textAlign: 'end'
        }}
      >
        {points}
      </TableCell>
    </TableRow>
  )
}

export default function Scoring(props) {
  // const [showScoring, setShowScoring] = props.scoring;

  return (
    <Box sx={{
      width: 400,
      margin: 'auto',
      mt: 2,
      mb: 4
    }}>
      <Grid
        container
        justifyContent='space-between'
        alignItems='center'
        sx={{
          borderBottom: '1px solid white',
          color: 'white',
          mb: 1,
        }}
      >
        <Grid item>
          <Typography
            variant='h6'
          >
            Scoring
          </Typography>
        </Grid>
        {/* <Grid item>
          {showScoring ? (
            <Button onClick={() => setShowScoring(false)}>
              Hide Scoring <ArrowUpwardRounded />
            </Button>
          ) : (
            <Button onClick={() => setShowScoring(true)}>
              Show Scoring <ArrowDownwardRounded />
            </Button>
          )}
        </Grid> */}
      </Grid>
      <Table>
        <TableBody>
          <Row desc='Fifteen' points='2' />
          <Row desc='Pair' points='2' />
          <Row desc='Three of a kind' points='6' />
          <Row desc='Four of a kind' points='12' />
          <Row desc='Runs of 3+ cards' points='1 per card' />
          <Row desc='Double 3-card run' points='8' />
          <Row desc='Double 4-card run' points='10' />
          <Row desc='Tripple run' points='15' />
          <Row desc='Quadruple run' points='16' />
          <Row desc='Flush' points='4 in hand + 1 cut card' />
          <Row desc='Jack as the Cut Card (His Heels)' points='2 to dealer' />
          <Row desc='Jack same suit as Cut Card (His Nobs)' points='1' />
        </TableBody>
      </Table>
    </Box>
  );
}