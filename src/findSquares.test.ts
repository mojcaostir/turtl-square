import { findSquaresForRectangle } from "./findSquares";

describe("findSquares behaviour", () => {
  it("returns all squares for rectangle with width = 5 and height = 7", () => {
    const squares = findSquaresForRectangle({ width: 5, height: 7 });
    const squaresToString = JSON.stringify(squares);
    expect(squaresToString).toEqual(
      '[{"x":0,"y":0,"length":5},{"x":0,"y":5,"length":2},{"x":2,"y":5,"length":2},{"x":4,"y":5,"length":1},{"x":4,"y":6,"length":1}]'
    );
  });

  it("returns one square for rectangle with width = 1 and height = 1", () => {
    const squares = findSquaresForRectangle({ width: 1, height: 1 });
    const squaresToString = JSON.stringify(squares);
    expect(squaresToString).toEqual('[{"x":0,"y":0,"length":1}]');
  });

  it("returns empty array for object with width = 1 and height = 0", () => {
    const squares = findSquaresForRectangle({ width: 1, height: 0 });
    const squaresToString = JSON.stringify(squares);
    expect(squaresToString).toEqual("[]");
  });

  it("returns empty array for object with width = 0 and height = 1", () => {
    const squares = findSquaresForRectangle({ width: 0, height: 1 });
    const squaresToString = JSON.stringify(squares);
    expect(squaresToString).toEqual("[]");
  });
});
