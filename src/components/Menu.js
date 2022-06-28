import { Close, Square } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Dialog,
  DialogContent,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  Link,
  Radio,
  RadioGroup,
  Toolbar,
  Typography,
} from '@mui/material';

import MenuTitle from './MenuTitle';
import Scoring from './Scoring';
import * as themes from '../theme';

export default function Menu(props) {
  const {
    open,
    handleClose,
    currentTheme,
    setTheme,
  } = props;

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullScreen
    >
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
          <IconButton
            edge='start'
            color='inherit'
            onClick={handleClose}
            aria-label='close'
          >
            <Close />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant='h6' component='div'>
            Rules & Settings
          </Typography>
        </Toolbar>
      </AppBar>
      <DialogContent sx={{ backgroundColor: 'background.main' }}>
        <Box sx={{ width: 400, mx: 'auto' }}>
          <Box sx={{ mb: 2 }}>
            <MenuTitle title='Theme' />
            <FormControl sx={{ paddingTop: 1 }}>
              <RadioGroup
                defaultValue={currentTheme}
                row
                name='theme-radio-buttons-group'
              >
                {Object.keys(themes).map((themeName) => {
                  return (
                    <FormControlLabel
                      key={themeName}
                      value={themeName}
                      control={<Radio />}
                      label={
                        <Grid container sx={{ marginTop: '4px' }}>
                          <Grid item sx={{ mr: 1, color: 'white' }}>
                            {themeName}
                          </Grid>
                          <Grid item sx={{
                            display: 'inline',
                            color: themes[themeName].palette.primary.main,
                          }}>
                            <Square/>
                          </Grid>
                          <Grid item sx={{
                            color: themes[themeName].palette.secondary.main,
                          }}>
                            <Square/>
                          </Grid>
                        </Grid>
                      }
                      onClick={() => setTheme(themeName)}
                      sx={{
                        paddingRight: 1,
                        marginLeft: 0,
                      }}
                    />
                  );
                })}
              </RadioGroup>
            </FormControl>
          </Box>
          <Box sx={{ mb: 2 }}>
            <MenuTitle title='Rules of Play' />
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