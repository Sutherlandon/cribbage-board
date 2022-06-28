import Cell from './Cell';

/**
 * A line of cells between the corners
 */
export default function StraightCells(props) {
  const {
    invert,
    length = 19,
    startIndex,
    rightPos,
    leftPos,
  } = props;

  let topColor = 'primary';
  let botColor = 'secondary';

  let topPegs = [rightPos.p1, rightPos.p2]
    .map(value => value < 0 ? value : value - startIndex);
  let botPegs = [leftPos.p1, leftPos.p2]
    .map(value => value < 0 ? value : value - startIndex);

  // flip top and bottom cells and start counting from the end of the array
  if (invert) {
    topColor = 'secondary';
    botColor = 'primary';

    topPegs = [leftPos.p1, leftPos.p2]
      .map(value => value < 0 ? value : (startIndex - value) + (length - 1));
    botPegs = [rightPos.p1, rightPos.p2]
      .map(value => value < 0 ? value : (startIndex - value) + (length - 1));
  }


  // we fill with 0's just to have something to map with
  return new Array(length).fill(0)
    .map((e, index) => {
      const skunkStyles = {};
      if (index + startIndex === 91) {
        skunkStyles.borderRightColor = 'skunk.main';
      } else if (index + startIndex === 92) {
        skunkStyles.borderLeftColor = 'skunk.main';
      }

      return (
        <div key={index}>
          <Cell
            color={topColor}
            hasPeg={topPegs.includes(index)}
            sx={{
              borderTopColor: 'black',
              ...skunkStyles,
            }}
          />
          <Cell
            color={botColor}
            hasPeg={botPegs.includes(index)}
            sx={{
              borderBottomColor: 'black',
              ...skunkStyles,
            }}
          />
        </div>
      );
    });
}
