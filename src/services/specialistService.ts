import prisma from "../prisma";

/**
 * all verified specialists, optionally filtered by language and location
 */
export const getSpecialists = async (language?: string, location?: string) => {
  return await prisma.specialist.findMany({
    where: {
      verified: true,
      ...(language ? { languages: { has: language } } : {}),
      ...(location ? { location } : {}),
    },
  });
};

/**
 *  a single specialist by id
 */
export const getSpecialistById = async (id: string) => {
  return await prisma.specialist.findUnique({
    where: { id },
  });
};
