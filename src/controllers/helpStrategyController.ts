import { Request, Response } from "express";
import {
  getHelpStrategies,
  getHelpStrategyBySituation,
} from "../services/helpStrategyService";

export const handleGetHelpStrategies = async (req: Request, res: Response) => {
  const language = req.query["lang"] as string | undefined;

  try {
    const strategies = await getHelpStrategies(language);
    return res.status(200).json({ strategies });
  } catch (error) {
    return res.status(500).json({
      error: {
        code: "SERVER_ERROR",
        message: "Something went wrong",
      },
    });
  }
};

export const handleGetHelpStrategyBySituation = async (
  req: Request,
  res: Response,
) => {
  const situation_type = req.params["situation_type"] as string;
  const language = req.query["lang"] as string | undefined;

  try {
    const strategy = await getHelpStrategyBySituation(situation_type, language);

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
