import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(1, "Name is required").max(50, "Name is too long"),
  language_preference: z.enum(["en", "fr", "dr"], {
    message: "Language must be en, fr or dr",
  }),
});

export const updateUserSchema = z.object({
  name: z.string().min(1).max(50).optional(),
  language_preference: z.enum(["en", "fr", "dr"]).optional(),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;
