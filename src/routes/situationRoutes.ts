import { Router } from "express";
import {
  handleGetSituations,
  handleGetSituationByType,
} from "../controllers/situationController";
import { validateQuery } from "../middleware/validateMiddleware";
import { getSituationsSchema } from "../schemas/situationSchemas";

const router = Router();

router.get("/", validateQuery(getSituationsSchema), handleGetSituations);
router.get("/:situation_type", handleGetSituationByType);

export default router;
