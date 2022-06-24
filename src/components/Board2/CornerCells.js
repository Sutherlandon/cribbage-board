import Cell from './Cell';

export function TopRight(props) {
  const {
    index,
    invert,
    rightPos,
    leftPos,
    skunk,
  } = props;

  let topColor = 'primary.main';
  let botColor = 'secondary.main';
  let topPeg = [rightPos.p1, rightPos.p2].includes(index);
  let botPeg = [leftPos.p1, leftPos.p2].includes(index);

  // invert the colors and peg calcualtions
  if (invert) {
    topColor = 'secondary.main';
    botColor = 'primary.main';
    botPeg = [rightPos.p1, rightPos.p2].includes(index);
    topPeg = [leftPos.p1, leftPos.p2].includes(index);
  }

  const skunkStyles = {}
  if (skunk) {
    skunkStyles.borderBottomColor = 'red';
  }

  return (
    <div>
      <Cell
        sx={{
          height: '32px',
          width: '30px',
          borderTopRightRadius: '30px',
          display: 'flex',
          alignItems: 'flex-end',
          backgroundColor: topColor,
          borderTopColor: 'black',
          borderRightColor: 'black',
          backgroundPosition: 'top 8px right 8px',
          ...skunkStyles
        }}
        hasPeg={topPeg}
      >
        <Cell
          sx={{
            borderTopRightRadius: '30px',
            borderWidth: '2px',
            borderLeft: 0,
            borderBottom: 0,
            backgroundColor: botColor,
            backgroundPosition: 'top 3px right 3px',
          }}
          hasPeg={botPeg}
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

  let topColor = 'primary.main';
  let botColor = 'secondary.main';
  let topPeg = [rightPos.p1, rightPos.p2].includes(index);
  let botPeg = [leftPos.p1, leftPos.p2].includes(index);

  // invert the colors and peg calcualtions
  if (invert) {
    topColor = 'secondary.main';
    botColor = 'primary.main';
    topPeg = [leftPos.p1, leftPos.p2].includes(index);
    botPeg = [rightPos.p1, rightPos.p2].includes(index);
  }

  const skunkStyles = {}
  if (skunk) {
    skunkStyles.borderTopColor = 'red';
  }

  return (
    <div>
      <Cell
        sx={{
          height: '32px',
          width: '30px',
          borderBottomRightRadius: '30px',
          backgroundColor: botColor,
          borderBottomColor: 'black',
          borderRightColor: 'black',
          backgroundPosition: 'bottom 8px right 8px',
          ...skunkStyles
        }}
        hasPeg={botPeg}
      >
        <Cell
          sx={{
            borderBottomRightRadius: '30px',
            borderWidth: '2px',
            borderLeft: 0,
            borderTop: 0,
            backgroundColor: topColor,
            backgroundPosition: 'bottom 3px right 3px',
          }}
          hasPeg={topPeg}
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

  let topColor = 'secondary.main';
  let botColor = 'primary.main';
  let topPeg = [rightPos.p1, rightPos.p2].includes(index);
  let botPeg = [leftPos.p1, leftPos.p2].includes(index);

  // invert the colors and peg calcualtions
  if (invert) {
    topColor = 'primary.main';
    botColor = 'secondary.main';
    topPeg = [leftPos.p1, leftPos.p2].includes(index);
    botPeg = [rightPos.p1, rightPos.p2].includes(index);
  }

  return (
    <div>
      <Cell
        sx={{
          height: '32px',
          width: '30px',
          borderTopLeftRadius: '30px',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          backgroundColor: botColor,
          borderTopColor: 'black',
          borderLeftColor: 'black',
          backgroundPosition: 'top 8px left 8px',
        }}
        hasPeg={topPeg}
      >
        <Cell
          sx={{
            borderTopLeftRadius: '30px',
            borderWidth: '2px',
            borderRight: 0,
            borderBottom: 0,
            backgroundColor: topColor,
            backgroundPosition: 'top 3px left 3px',
          }}
          hasPeg={botPeg}
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

  let topColor = 'primary.main';
  let botColor = 'secondary.main';
  let topPeg = [rightPos.p1, rightPos.p2].includes(index);
  let botPeg = [leftPos.p1, leftPos.p2].includes(index);

  // invert the colors and peg calcualtions
  if (invert) {
    topColor = 'secondary.main';
    botColor = 'primary.main';
    topPeg = [leftPos.p1, leftPos.p2].includes(index);
    botPeg = [rightPos.p1, rightPos.p2].includes(index);
  }

  return (
    <div>
      <Cell
        sx={{
          height: '32px',
          width: '30px',
          borderBottomLeftRadius: '30px',
          display: 'flex',
          justifyContent: 'flex-end',
          backgroundColor: botColor,
          borderBottomColor: 'black',
          borderLeftColor: 'black',
          backgroundPosition: 'bottom 8px left 8px',
        }}
        hasPeg={botPeg}
      >
        <Cell
          sx={{
            borderBottomLeftRadius: '30px',
            borderWidth: '2px',
            borderRight: 0,
            borderTop: 0,
            backgroundColor: topColor,
            backgroundPosition: 'bottom 3px left 3px',
          }}
          hasPeg={topPeg}
        />
      </Cell>
    </div>
  );
}