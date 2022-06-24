import { Close } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Dialog,
  Toolbar,
  IconButton,
  Typography,
  DialogContent,
  Link,
} from '@mui/material';
import MenuTitle from './MenuTitle';

import Scoring from './Scoring';

export default function Menu(props) {
  const { open, handleClose } = props;

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullScreen
    >
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <Close />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Rules
          </Typography>
        </Toolbar>
      </AppBar>
      <DialogContent
        sx={{ backgroundColor: 'rgb(48, 48, 48)'}}
      >
        <Box sx={{ width: 400, mx: 'auto' }}>
          <MenuTitle title='Rules of Play'/>
          <Box sx={{ mb: 2 }}>
            <Link href='https://bicyclecards.com/how-to-play/cribbage/'>
              https://bicyclecards.com/how-to-play/cribbage/
            </Link>
          </Box>
          <Scoring />
        </Box>
      </DialogContent>
    </Dialog>
  );
}