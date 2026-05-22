import { Router } from "express";
import { handleCreateUser, handleGetUser } from "../controllers/userController";

const router = Router();

router.post("/", handleCreateUser);
router.get("/:id", handleGetUser);

export default router;
