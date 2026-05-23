import { Router } from "express";
import {
  handleGetSpecialists,
  handleGetSpecialistById,
} from "../controllers/specialistController";

const router = Router();

router.get("/", handleGetSpecialists);
router.get("/:id", handleGetSpecialistById);

export default router;
