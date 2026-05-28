import { Router } from "express";
import {
  handleCreateBooking,
  handleGetAllBookings,
} from "../controllers/bookingController";
import { validateBody } from "../middleware/validateMiddleware";
import { createBookingSchema } from "../schemas/bookingSchemas";

const router = Router();

router.post("/", validateBody(createBookingSchema), handleCreateBooking);
router.get("/admin", handleGetAllBookings);

export default router;
