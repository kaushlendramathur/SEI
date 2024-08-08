import { loginUser } from "@/api/loginUser";
import { getCredentials,saveToken } from "./authStore";

type Token = string | null;

export const refreshToken = async (): Promise<Token> => {
  const credentials = await getCredentials();

  if (credentials) {
    try {
      const response = await loginUser(
        credentials.username,
        credentials.password,
      )

      if (response.ok) {
        const token = response?.DataModel;
        await saveToken(token);
        return token;
      } else {
        throw new Error('Failed to refresh token');
      }
    } catch (error) {
      console.error('Failed to refresh token', error);
    }
  } else {
    console.error('No credentials found');
  }

  return null;
};
