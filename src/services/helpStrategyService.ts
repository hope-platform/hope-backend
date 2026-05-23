import prisma from "../prisma";

/**
 * all help strategies, optionally filtered by language
 */
export const getHelpStrategies = async (language?: string) => {
  return await prisma.helpStrategy.findMany({
    where: language ? { language } : undefined,
  });
};

/**
 *  a single help strategy by situation type and language
 */
export const getHelpStrategyBySituation = async (
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
