import { z } from "zod";

export const createBookingSchema = z.object({
  specialist_id: z.string().uuid("specialist_id must be a valid UUID"),
  contact_method: z.enum(["whatsapp", "email"], {
    message: "contact_method must be whatsapp or email",
  }),
  parent_name: z.string().min(1, "parent_name is required"),
  parent_email: z.string().email("parent_email must be a valid email"),
});

export type CreateBookingInput = z.infer<typeof createBookingSchema>;
