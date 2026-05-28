import { Request, Response } from "express";
import { createBooking, getAllBookings } from "../services/bookingService";

export const handleCreateBooking = async (req: Request, res: Response) => {
  const user = JSON.parse(req.headers["x-hope-user"] as string);
  const { specialist_id, contact_method } = req.body;

  if (!specialist_id || !contact_method) {
    return res.status(400).json({
      error: {
        code: "BAD_REQUEST",
        message: "specialist_id and contact_method are required",
      },
    });
  }

  try {
    const booking = await createBooking(user.id, specialist_id, contact_method);
    return res.status(201).json({ booking });
  } catch (error: any) {
    console.error(error);

    if (error.code === "P2003") {
      return res.status(404).json({
        error: {
          code: "NOT_FOUND",
          message: "Specialist not found",
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
