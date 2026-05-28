import { z } from "zod";

export const createBookingSchema = z.object({
  specialist_id: z.string().uuid("specialist_id must be a valid UUID"),
  contact_method: z.enum(["whatsapp", "email"], {
    message: "contact_method must be whatsapp or email",
  }),
});

export type CreateBookingInput = z.infer<typeof createBookingSchema>;
