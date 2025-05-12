import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@mui/material';

import MenuTitle from './MenuTitle';

function Row({ desc, points }) {
  return (
    <TableRow>
      <TableCell
        sx={{
          border: 'none',
          color: 'text.main',
          padding: 0,
        }}
      >
        {desc}
      </TableCell>
      <TableCell
        sx={{
          border: 'none',
          color: 'text.main',
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
  return (
    <Box sx={{
      width: 400,
      margin: 'auto',
      mt: 2,
      mb: 4,
    }}>
      <MenuTitle title='Scoring' />
      <Table>
        <TableBody>
          <Row desc='Fifteen' points='2' />
          <Row desc='Thirty One' points='2' />
          <Row desc='"Go" or Last Card' points='1' />
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