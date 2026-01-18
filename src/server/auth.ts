import { auth, currentUser } from "@clerk/nextjs/server";
import type { User } from "@clerk/nextjs/server";

/**
 * Get the authentication data from Clerk
 * @returns The auth object with userId and other auth data
 */
export const getAuth = () => {
  return auth();
};

/**
 * Get the current user from Clerk
 * @returns Promise with user or null if not authenticated
 */
export const getUser = async (): Promise<User | null> => {
  const user = await currentUser();
  return user;
};

/**
 * Check if the current user is a developer
 * @returns Promise with boolean indicating if user is a developer
 */
export const isUserDeveloper = async (): Promise<boolean> => {
  const user = await getUser();

  if (!user) {
    return false;
  }

  // Check if the user has the developer role in publicMetadata
  const metadata = user.publicMetadata;
  return metadata?.typeUser === "Dev";
};
