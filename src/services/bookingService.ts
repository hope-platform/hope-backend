import prisma from "../prisma";

/**
 * Create a new booking request
 */
export const createBooking = async (
  user_id: string,
  specialist_id: string,
  contact_method: string,
) => {
  return await prisma.bookingRequest.create({
    data: {
      user_id,
      specialist_id,
      contact_method,
      status: "pending",
    },
  });
};

/**
 * Get all booking requests, admin only
 */
export const getAllBookings = async () => {
  return await prisma.bookingRequest.findMany({
    include: {
      user: true,
      specialist: true,
    },
  });
};
