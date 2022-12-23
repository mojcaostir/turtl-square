import Joi from "joi";
import { Rectangle } from "./models";

export function validateInput(input: Rectangle): Joi.ValidationResult<Rectangle> {
  const Rectangle = Joi.object()
    .keys({
      width: Joi.number().required(),
      height: Joi.number().required(),
    })
    .required();
  return Rectangle.validate(input);
}
