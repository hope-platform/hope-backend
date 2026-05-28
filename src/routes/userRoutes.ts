import { Router } from "express";
import { handleCreateUser, handleGetUser } from "../controllers/userController";
import { validateBody } from "../middleware/validateMiddleware";
import { createUserSchema } from "../schemas/userSchemas";

const router = Router();

router.post("/", validateBody(createUserSchema), handleCreateUser);
router.get("/:id", handleGetUser);

export default router;
