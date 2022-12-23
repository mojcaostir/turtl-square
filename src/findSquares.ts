import { Rectangle, Square } from "./models";
import { validateInput } from "./validation";

export function findSquaresForRectangle(input: Rectangle): Square[] | Error {
  const inputValidated = validateInput(input);
  if (inputValidated.error) {
    return new Error(JSON.stringify(inputValidated.error));
  } else {
    const rectangle = inputValidated.value;
    const squares: Square[] = [];
    let x = 0;
    let y = 0;
    let width = rectangle.width;
    let height = rectangle.height;
    let length = Math.min(rectangle.width, rectangle.height);

    while (true) {
      if (width < 1 || height < 1) {
        break;
      }
      if (width < height) {
        length = width;
        squares.push({ x, y, length });
        y = y + width;
        height = height - width;
      } else {
        length = height;
        squares.push({ x, y, length });
        x = x + height;
        width = width - height;
      }
    }
    return squares;
  }
}
