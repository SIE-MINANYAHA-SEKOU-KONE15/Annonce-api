import { Request, Response, NextFunction } from "express";

export const errroHandler = (
  err: Error,
  res: Response,
  req: Request,
  next: NextFunction
) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wront" });
};
