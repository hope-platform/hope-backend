import { Request, Response } from "express";
import { createBooking, getAllBookings } from "../services/bookingService";

export const handleCreateBooking = async (req: Request, res: Response) => {
  const user = JSON.parse(req.headers["x-hope-user"] as string);
  const { specialist_id, contact_method, parent_name, parent_email } = req.body;

  try {
    const booking = await createBooking(
      user.id,
      specialist_id,
      contact_method,
      parent_name,
      parent_email,
    );
    return res.status(201).json({ booking });
  } catch (error: any) {
    console.error(error);

    if (error.message === "SPECIALIST_NOT_FOUND") {
      return res.status(404).json({
        error: {
          code: "NOT_FOUND",
          message: "Specialist not found",
        },
      });
    }

    if (error.message === "EMAIL_FAILED") {
      return res.status(502).json({
        error: {
          code: "EMAIL_FAILED",
          message:
            "Booking saved but email failed — Hope will retry within 24h",
        },
      });
    }

    return res.status(500).json({
      error: {
        code: "SERVER_ERROR",
        message: "Something went wrong",
      },
    });
  }
};

export const handleGetAllBookings = async (_req: Request, res: Response) => {
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
