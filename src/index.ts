type Square = {
  x: number,
  y: number,
  length: number
};

function findBiggestSquares(width: number, height: number): Square[] {
  const squares: Square[] = [];
  let x = 0;
  let y = 0;
  let length = Math.min(width, height);

  while (length > 0) {
    if (x < y) {
    x = x-y;
    y = 0
    length = x-y;
    squares.push({x,y,length})
  } else {
    x = 0;
    y = y-x
    length = y-x;
    squares.push({x,y,length})
  }
  }
  return squares;
}
