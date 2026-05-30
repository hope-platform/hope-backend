import { z } from "zod";

export const getSituationsSchema = z.object({
  lang: z.enum(["en", "fr", "dr"]).optional(),
});

export type GetSituationsInput = z.infer<typeof getSituationsSchema>;
