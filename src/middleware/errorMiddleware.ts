import { Request, Response, NextFunction } from "express";

export const errorMiddleware = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error(error);

  return res.status(500).json({
    error: {
      code: "SERVER_ERROR",
      message: "Something went wrong",
    },
  });
};
