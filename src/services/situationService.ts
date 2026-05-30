import prisma from "../prisma";

/**
 * all help strategies, optionally filtered by language
 */
export const getSituations = async (language?: string) => {
  return await prisma.helpStrategy.findMany({
    where: language ? { language } : undefined,
  });
};

/**
 *  a single help strategy by situation type and language
 */
export const getSituationByType = async (
  situation_type: string,
  language?: string,
) => {
  return await prisma.helpStrategy.findFirst({
    where: {
      situation_type,
      ...(language ? { language } : {}),
    },
  });
};
