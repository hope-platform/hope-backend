import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

export const validateBody = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      const firstError = result.error.issues[0];
      return res.status(400).json({
        error: {
          code: "BAD_REQUEST",
          message: firstError.message,
        },
      });
    }

    req.body = result.data;
    next();
  };
};

export const validateQuery = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.query);

    if (!result.success) {
      const firstError = result.error.issues[0];
      return res.status(400).json({
        error: {
          code: "BAD_REQUEST",
          message: firstError.message,
        },
      });
    }

    next();
  };
};
