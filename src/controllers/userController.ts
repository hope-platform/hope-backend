import { Request, Response } from "express";
import { createUser, getUserById } from "../services/userService";

/**
 * Handle POST /users
 * Create a new user after onboarding
 */
export const handleCreateUser = async (req: Request, res: Response) => {
  const { name, language_preference } = req.body;

  if (!name || !language_preference) {
    return res.status(400).json({
      error: {
        code: "BAD_REQUEST",
        message: "name and language_preference are required",
      },
    });
  }

  try {
    const user = await createUser(name, language_preference);
    return res.status(201).json({ user });
  } catch (error) {
    return res.status(500).json({
      error: {
        code: "SERVER_ERROR",
        message: "Something went wrong",
      },
    });
  }
};

/**
 * Handle GET /users/:id
 * Return a single user by id
 */
export const handleGetUser = async (req: Request, res: Response) => {
  const id = req.params["id"] as string;

  try {
    const user = await getUserById(id);

    if (!user) {
      return res.status(404).json({
        error: {
          code: "NOT_FOUND",
          message: "User not found",
        },
      });
    }

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({
      error: {
        code: "SERVER_ERROR",
        message: "Something went wrong",
      },
    });
  }
};
