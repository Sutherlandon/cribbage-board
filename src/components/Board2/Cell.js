import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';

export default function Cell(props) {
  const {
    children,
    color,
    hasPeg,
    sx,
  } = props;

  const theme = useTheme();
  const dotImage = theme.pegs[color];

  return (
    <Box sx={{
      height: '15px',
      width: '15px',
      border: '1px solid',
      borderColor: 'border.main',
      backgroundColor: `${color}.background`,
      backgroundSize: '12px 12px',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: hasPeg && `url(${dotImage})`,
      ...sx,
    }}>
      {children}
    </Box>
  );
}
