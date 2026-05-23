import { Router } from "express";
import {
  handleCreateBooking,
  handleGetAllBookings,
} from "../controllers/bookingController";

const router = Router();

router.post("/", handleCreateBooking);
router.get("/admin", handleGetAllBookings);

export default router;
