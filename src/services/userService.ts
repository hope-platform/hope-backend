import prisma from "../prisma";

/**
 * Create a new user in the database
 */
export const createUser = async (name: string, language_preference: string) => {
  return await prisma.user.create({
    data: {
      name,
      language_preference,
      email: `${Date.now()}@hope.app`,
    },
  });
};

/**
 * Find a single user by id
 */
export const getUserById = async (id: string) => {
  return await prisma.user.findUnique({
    where: { id },
  });
};
