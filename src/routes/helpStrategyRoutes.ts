import { Router } from "express";
import {
  handleGetHelpStrategies,
  handleGetHelpStrategyBySituation,
} from "../controllers/helpStrategyController";
import { validateQuery } from "../middleware/validateMiddleware";
import { getHelpStrategiesSchema } from "../schemas/helpStrategySchemas";

const router = Router();

router.get(
  "/",
  validateQuery(getHelpStrategiesSchema),
  handleGetHelpStrategies,
);
router.get("/:situation_type", handleGetHelpStrategyBySituation);

export default router;
