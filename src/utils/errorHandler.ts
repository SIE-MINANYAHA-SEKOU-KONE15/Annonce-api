import { Response } from "express";

export const handlerError = (res: Response, error: Error) => {
  res.status(400).json({ message: error.message });
};
