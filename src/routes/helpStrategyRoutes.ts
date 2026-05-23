import { Router } from "express";
import {
  handleGetHelpStrategies,
  handleGetHelpStrategyBySituation,
} from "../controllers/helpStrategyController";

const router = Router();

router.get("/", handleGetHelpStrategies);
router.get("/:situation_type", handleGetHelpStrategyBySituation);

export default router;
