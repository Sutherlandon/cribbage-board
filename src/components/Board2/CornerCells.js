import Cell from './Cell';

export function TopRight(props) {
  const {
    index,
    invert,
    rightPos,
    leftPos,
    skunk,
  } = props;

  let topColor = 'primary';
  let botColor = 'secondary';
  let topPeg = [rightPos.p1, rightPos.p2].includes(index);
  let botPeg = [leftPos.p1, leftPos.p2].includes(index);

  // invert the colors and peg calcualtions
  if (invert) {
    topColor = 'secondary';
    botColor = 'primary';
    botPeg = [rightPos.p1, rightPos.p2].includes(index);
    topPeg = [leftPos.p1, leftPos.p2].includes(index);
  }

  const skunkStyles = {}
  if (skunk) {
    skunkStyles.borderBottomColor = 'skunk2.main';
  }

  return (
    <div>
      <Cell
        color={topColor}
        hasPeg={topPeg}
        sx={{
          height: '32px',
          width: '30px',
          borderTopRightRadius: '30px',
          display: 'flex',
          alignItems: 'flex-end',
          borderTopColor: 'black',
          borderRightColor: 'black',
          backgroundPosition: 'top 8px right 8px',
          ...skunkStyles
        }}
      >
        <Cell
          color={botColor}
          hasPeg={botPeg}
          sx={{
            borderTopRightRadius: '30px',
            borderWidth: '2px',
            borderLeft: 0,
            borderBottom: 0,
            backgroundPosition: 'top 3px right 3px',
          }}
        />
      </Cell>
    </div>
  );
}

export function BottomRight(props) {
  const {
    index,
    invert,
    rightPos,
    leftPos,
    skunk,
  } = props;

  let topColor = 'primary';
  let botColor = 'secondary';
  let topPeg = [rightPos.p1, rightPos.p2].includes(index);
  let botPeg = [leftPos.p1, leftPos.p2].includes(index);

  // invert the colors and peg calcualtions
  if (invert) {
    topColor = 'secondary';
    botColor = 'primary';
    topPeg = [leftPos.p1, leftPos.p2].includes(index);
    botPeg = [rightPos.p1, rightPos.p2].includes(index);
  }

  const skunkStyles = {}
  if (skunk) {
    skunkStyles.borderTopColor = 'skunk2.main';
  }

  return (
    <div>
      <Cell
        color={botColor}
        hasPeg={botPeg}
        sx={{
          height: '32px',
          width: '30px',
          borderBottomRightRadius: '30px',
          borderBottomColor: 'black',
          borderRightColor: 'black',
          backgroundPosition: 'bottom 8px right 8px',
          ...skunkStyles
        }}
      >
        <Cell
          color={topColor}
          hasPeg={topPeg}
          sx={{
            borderBottomRightRadius: '30px',
            borderWidth: '2px',
            borderLeft: 0,
            borderTop: 0,
            backgroundPosition: 'bottom 3px right 3px',
          }}
        />
      </Cell>
    </div>
  );
}

export function TopLeft(props) {
  const {
    index,
    invert,
    rightPos,
    leftPos,
  } = props;

  let topColor = 'secondary';
  let botColor = 'primary';
  let topPeg = [rightPos.p1, rightPos.p2].includes(index);
  let botPeg = [leftPos.p1, leftPos.p2].includes(index);

  // invert the colors and peg calcualtions
  if (invert) {
    topColor = 'primary';
    botColor = 'secondary';
    topPeg = [leftPos.p1, leftPos.p2].includes(index);
    botPeg = [rightPos.p1, rightPos.p2].includes(index);
  }

  return (
    <div>
      <Cell
        color={botColor}
        hasPeg={topPeg}
        sx={{
          height: '32px',
          width: '30px',
          borderTopLeftRadius: '30px',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          borderTopColor: 'black',
          borderLeftColor: 'black',
          backgroundPosition: 'top 8px left 8px',
        }}
      >
        <Cell
          color={topColor}
          hasPeg={botPeg}
          sx={{
            borderTopLeftRadius: '30px',
            borderWidth: '2px',
            borderRight: 0,
            borderBottom: 0,
            backgroundPosition: 'top 3px left 3px',
          }}
        />
      </Cell>
    </div>
  );
}

export function BottomLeft(props) {
  const {
    index,
    invert,
    rightPos,
    leftPos,
  } = props;

  let topColor = 'primary';
  let botColor = 'secondary';
  let topPeg = [rightPos.p1, rightPos.p2].includes(index);
  let botPeg = [leftPos.p1, leftPos.p2].includes(index);

  // invert the colors and peg calcualtions
  if (invert) {
    topColor = 'secondary';
    botColor = 'primary';
    topPeg = [leftPos.p1, leftPos.p2].includes(index);
    botPeg = [rightPos.p1, rightPos.p2].includes(index);
  }

  return (
    <div>
      <Cell
        color={botColor}
        hasPeg={botPeg}
        sx={{
          height: '32px',
          width: '30px',
          borderBottomLeftRadius: '30px',
          display: 'flex',
          justifyContent: 'flex-end',
          borderBottomColor: 'black',
          borderLeftColor: 'black',
          backgroundPosition: 'bottom 8px left 8px',
        }}
      >
        <Cell
          color={topColor}
          hasPeg={topPeg}
          sx={{
            borderBottomLeftRadius: '30px',
            borderWidth: '2px',
            borderRight: 0,
            borderTop: 0,
            backgroundPosition: 'bottom 3px left 3px',
          }}
        />
      </Cell>
    </div>
  );
}