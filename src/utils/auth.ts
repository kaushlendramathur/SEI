import * as SecureStore from 'expo-secure-store';

interface AuthState {
  signIn: (authToken: string) => Promise<void>;
  signOut: () => void;
}

const auth: AuthState = {
  signIn: async (authToken) => {
    console.log('Login successful:');
    await SecureStore.setItemAsync('authToken', authToken);
  },
  signOut: async () => {
    await SecureStore.deleteItemAsync('authToken');
  },
};

export default auth;
