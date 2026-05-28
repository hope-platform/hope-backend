import { Request, Response, NextFunction } from "express";
import prisma from "../prisma";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const userId = req.headers["x-hope-user-id"] as string;

  if (!userId) {
    return res.status(401).json({
      error: {
        code: "UNAUTHORIZED",
        message: "Missing X-Hope-User-Id header",
      },
    });
  }

  try {
    let user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          id: userId,
          name: "Guest",
          language_preference: "en",
          email: `${Date.now()}@hope.app`,
        },
      });
    }

    req.headers["x-hope-user"] = JSON.stringify(user);
    next();
  } catch (error) {
    return res.status(500).json({
      error: {
        code: "SERVER_ERROR",
        message: "Something went wrong",
      },
    });
  }
};
