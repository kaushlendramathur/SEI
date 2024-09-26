import * as SecureStore from 'expo-secure-store';
import { saveToken, clearCredentials, clearToken } from './authStore';

interface AuthState {
  signIn: (authToken: string) => Promise<void>;
  signOut: () => void;
}

const auth: AuthState = {
  signIn: async (authToken) => {
    console.log ('Login successful:');
    await saveToken(authToken);
  },
  signOut: async () => {
    await clearToken();
    await clearCredentials();
  },
};

export default auth;
