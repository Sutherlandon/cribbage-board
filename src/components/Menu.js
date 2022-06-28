import { Close, Square } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Dialog,
  DialogContent,
  FormGroup,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  Link,
  Radio,
  RadioGroup,
  Switch,
  Toolbar,
  Typography,
} from '@mui/material';

import MenuTitle from './MenuTitle';
import Scoring from './Scoring';
import * as themes from '../theme';

function MenuSection(props) {
  return (
    <Box sx={{ mb: 2 }}>
      <MenuTitle title={props.title} />
      {props.children}
    </Box>
  );
}

export default function Menu(props) {
  const {
    open,
    handleClose,
    currentTheme,
    setTheme,
    orientation,
    setOrientation,
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
            Cribbage Settings & Rules
          </Typography>
        </Toolbar>
      </AppBar>
      <DialogContent sx={{ backgroundColor: 'background.main' }}>
        <Box sx={{ width: 400, mx: 'auto' }}>
          <MenuSection title='Theme'>
            <FormControl>
              <RadioGroup
                row
                defaultValue={currentTheme}
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
                            <Square />
                          </Grid>
                          <Grid item sx={{
                            color: themes[themeName].palette.secondary.main,
                          }}>
                            <Square />
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
          </MenuSection>
          <MenuSection title='Control Orientations'>
            <FormGroup row>
              <FormControlLabel
                label='Flip'
                labelPlacement='start'
                sx={{ color: 'primary.main' }}
                control={
                  <Switch
                    defaultChecked={orientation.left}
                    onClick={
                      () => setOrientation({
                        left: !orientation.left,
                        right: orientation.right
                      })
                    }
                  />}
              />
              <FormControlLabel
                label='Flip'
                labelPlacement='start'
                sx={{ color: 'secondary.main' }}
                control={
                  <Switch
                    defaultChecked={orientation.right}
                    color='secondary'
                    onClick={
                      () => setOrientation({
                        left: orientation.left,
                        right: !orientation.right
                      })
                    }
                  />
                }
              />
            </FormGroup>
          </MenuSection>
          <MenuSection title='Rules of Play'>
            <Link href='https://bicyclecards.com/how-to-play/cribbage/'>
              https://bicyclecards.com/how-to-play/cribbage/
            </Link>
          </MenuSection>
          <Scoring />
        </Box>
      </DialogContent>
    </Dialog>
  );
}
