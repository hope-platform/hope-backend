import { Request, Response } from "express";
import {
  getSituations,
  getSituationByType,
} from "../services/situationService";

export const handleGetSituations = async (req: Request, res: Response) => {
  const language = req.query["lang"] as string | undefined;

  try {
    const strategies = await getSituations(language);
    return res.status(200).json({ strategies });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: {
        code: "SERVER_ERROR",
        message: "Something went wrong",
      },
    });
  }
};

export const handleGetSituationByType = async (req: Request, res: Response) => {
  const situation_type = req.params["situation_type"] as string;
  const language = req.query["lang"] as string | undefined;

  try {
    const strategy = await getSituationByType(situation_type, language);

    if (!strategy) {
      return res.status(404).json({
        error: {
          code: "NOT_FOUND",
          message: "Strategy not found",
        },
      });
    }

    return res.status(200).json({ strategy });
  } catch (error) {
    return res.status(500).json({
      error: {
        code: "SERVER_ERROR",
        message: "Something went wrong",
      },
    });
  }
};
