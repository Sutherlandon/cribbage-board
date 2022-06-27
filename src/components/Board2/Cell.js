import Box from '@mui/material/Box';
import dotImage from '../../images/dot.png';

export default function Cell(props) {
  return (
    <Box sx={{
      height: '15px',
      width: '15px',
      border: '1px solid',
      borderColor: 'border.main',
      backgroundSize: '12px 12px',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: props.hasPeg && `url(${dotImage})`,
      ...props.sx,
    }}>
      {props.children}
    </Box>
  );
}
