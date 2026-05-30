import prisma from "../prisma";
import {
  sendSpecialistEmail,
  sendParentConfirmationEmail,
} from "./emailService";

/**
 * Create a new booking request and sends emails
 */
export const createBooking = async (
  user_id: string,
  specialist_id: string,
  contact_method: string,
  parent_name: string,
  parent_email: string,
) => {
  const specialist = await prisma.specialist.findUnique({
    where: { id: specialist_id },
  });

  if (!specialist) {
    throw new Error("SPECIALIST_NOT_FOUND");
  }

  const booking = await prisma.bookingRequest.create({
    data: {
      user_id,
      specialist_id,
      contact_method,
      status: "pending",
    },
  });

  try {
    await sendSpecialistEmail(
      specialist.contact_email!,
      specialist.name,
      parent_name,
      parent_email,
      contact_method,
    );

    await sendParentConfirmationEmail(
      parent_email,
      parent_name,
      specialist.name,
    );

    await prisma.bookingRequest.update({
      where: { id: booking.id },
      data: { status: "sent" },
    });

    return { ...booking, status: "sent" };
  } catch (error) {
    await prisma.bookingRequest.update({
      where: { id: booking.id },
      data: { status: "failed" },
    });

    throw new Error("EMAIL_FAILED");
  }
};

/**
 * Return all booking requests (admin only)
 */
export const getAllBookings = async () => {
  return await prisma.bookingRequest.findMany({
    include: {
      user: true,
      specialist: true,
    },
  });
};
