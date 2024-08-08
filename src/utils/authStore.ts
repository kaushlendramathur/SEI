import * as SecureStore from 'expo-secure-store';

type Credentials = {
    username: string;
    password: string;
  };
  
type Token = string | null;
  

export const saveCredentials = async (username: string, password: string): Promise<void> => {
    await SecureStore.setItemAsync('username', username);
    await SecureStore.setItemAsync('password', password);
};

export const getCredentials = async (): Promise<Credentials | null> => {
    const username = await SecureStore.getItemAsync('username');
    const password = await SecureStore.getItemAsync('password');
    if (username && password) {
      return { username, password };
    }
    return null;
};

export const saveToken = async (token: string): Promise<void> => {
    await SecureStore.setItemAsync('token', token);
};
  
export const getToken = async (): Promise<Token> => {
    return await SecureStore.getItemAsync('token');
};

export const clearCredentials = async (): Promise<void> => {
    await SecureStore.deleteItemAsync('username');
    await SecureStore.deleteItemAsync('password');
}; 

export const clearToken = async (): Promise<void> => {
    await SecureStore.deleteItemAsync('token');
}
