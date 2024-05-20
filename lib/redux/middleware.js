import AsyncStorage from '@react-native-async-storage/async-storage';

export async function isAuthenticated() {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    return true;
  } else {
    return false;
  }
}
