import { Box } from '@mui/material';

import EndCell from './EndCell';
import StraightCells from './StraightCells';
import {
  TopLeft,
  BottomLeft,
  TopRight,
  BottomRight,
} from './CornerCells';
import HomeCells from './HomeCells';

function Row({ sx, children }) {
  return (
    <Box sx={{ ...sx, display: 'flex' }}>
      {children}
    </Box>
  );
}

export default function Board(props) {
  //const { leftPos, rightPos } = props;

  return (
    <div id='Board' style={{ width: '100%' }}>
      <Row sx={{ marginLeft: '13px' }}>
        <HomeCells {...props} />
        <StraightCells startIndex={0} length={17} {...props} />
        <TopRight index={17} {...props} />
      </Row>
      <Row>
        <TopLeft invert index={38} {...props} />
        <StraightCells invert startIndex={19} {...props} />
        <BottomRight invert index={18} {...props} />
      </Row>
      <Row>
        <BottomLeft index={39} {...props} />
        <StraightCells startIndex={40} {...props} />
        <TopRight index={59} {...props} />
      </Row>
      <Row>
        <TopLeft invert index={80} {...props} />
        <StraightCells invert startIndex={61} {...props} />
        <BottomRight invert index={60} {...props} />
      </Row>
      <Row>
        <BottomLeft index={81} {...props} />
        <StraightCells startIndex={82} {...props} />
        <TopRight index={101} {...props} />
      </Row>
      <Row sx={{ marginLeft: '17px' }}>
        <EndCell index={120} {...props} />
        <StraightCells invert length={17} startIndex={103} {...props} />
        <BottomRight invert index={102} {...props} />
      </Row>
    </div>
  );
}