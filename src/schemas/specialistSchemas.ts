import { z } from "zod";

export const getSpecialistsSchema = z.object({
  language: z.enum(["en", "fr", "dr"]).optional(),
  location: z.string().optional(),
});

export type GetSpecialistsInput = z.infer<typeof getSpecialistsSchema>;
