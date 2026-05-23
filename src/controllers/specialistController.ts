import { Request, Response } from "express";
import {
  getSpecialists,
  getSpecialistById,
} from "../services/specialistService";

export const handleGetSpecialists = async (req: Request, res: Response) => {
  const language = req.query["language"] as string | undefined;
  const location = req.query["location"] as string | undefined;

  try {
    const specialists = await getSpecialists(language, location);
    return res.status(200).json({ specialists });
  } catch (error) {
    return res.status(500).json({
      error: {
        code: "SERVER_ERROR",
        message: "Something went wrong",
      },
    });
  }
};

export const handleGetSpecialistById = async (req: Request, res: Response) => {
  const id = req.params["id"] as string;

  try {
    const specialist = await getSpecialistById(id);

    if (!specialist) {
      return res.status(404).json({
        error: {
          code: "NOT_FOUND",
          message: "Specialist not found",
        },
      });
    }

    return res.status(200).json({ specialist });
  } catch (error) {
    return res.status(500).json({
      error: {
        code: "SERVER_ERROR",
        message: "Something went wrong",
      },
    });
  }
};
