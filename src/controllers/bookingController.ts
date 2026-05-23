import { Request, Response } from "express";
import { createBooking, getAllBookings } from "../services/bookingService";

export const handleCreateBooking = async (req: Request, res: Response) => {
  const { user_id, specialist_id, contact_method } = req.body;

  if (!user_id || !specialist_id || !contact_method) {
    return res.status(400).json({
      error: {
        code: "BAD_REQUEST",
        message: "user_id, specialist_id and contact_method are required",
      },
    });
  }

  try {
    const booking = await createBooking(user_id, specialist_id, contact_method);
    return res.status(201).json({ booking });
  } catch (error) {
    return res.status(500).json({
      error: {
        code: "SERVER_ERROR",
        message: "Something went wrong",
      },
    });
  }
};

export const handleGetAllBookings = async (req: Request, res: Response) => {
  try {
    const bookings = await getAllBookings();
    return res.status(200).json({ bookings });
  } catch (error) {
    return res.status(500).json({
      error: {
        code: "SERVER_ERROR",
        message: "Something went wrong",
      },
    });
  }
};
