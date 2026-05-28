import { z } from "zod";

export const getHelpStrategiesSchema = z.object({
  lang: z.enum(["en", "fr", "dr"]).optional(),
});

export type GetHelpStrategiesInput = z.infer<typeof getHelpStrategiesSchema>;
