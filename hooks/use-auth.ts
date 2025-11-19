import * as SecureStore from 'expo-secure-store';

export async function saveLogin(username: string, password: string) {
  // NEVER save real passwords without encryption on real apps.
  await SecureStore.setItemAsync('username', username);
  await SecureStore.setItemAsync('password', password, {
    requireAuthentication: false, // You can turn this on for biometrics later
  });
}


export async function loadLogin() {
  const username = await SecureStore.getItemAsync('username');
  const password = await SecureStore.getItemAsync('password');

  return { username, password };
}

export async function clearLogin() {
  await SecureStore.deleteItemAsync('username');
  await SecureStore.deleteItemAsync('password');
}
