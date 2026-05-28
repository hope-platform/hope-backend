import { Router } from "express";
import {
  handleGetSpecialists,
  handleGetSpecialistById,
} from "../controllers/specialistController";
import { validateQuery } from "../middleware/validateMiddleware";
import { getSpecialistsSchema } from "../schemas/specialistSchemas";

const router = Router();

router.get("/", validateQuery(getSpecialistsSchema), handleGetSpecialists);
router.get("/:id", handleGetSpecialistById);

export default router;
