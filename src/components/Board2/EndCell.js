import Box from '@mui/material/Box';
import Cell from './Cell';

export default function EndCell(props) {
  return (
    <Box sx={{ 
      display: 'flex',
      alignItems: 'center',
      marginLeft: '17px',
    }}>
      <Cell sx={{
        borderRadius: '30px',
        marginRight: '8px',
        marginLeft: '5px',
        borderWidth: '2px',
        borderTopColor: 'secondary.main',
        borderRightColor: 'secondary.main',
        borderLeftColor: 'primary.main',
        borderBottomColor: 'primary.main',
      }} />
    </Box>
  );
}
