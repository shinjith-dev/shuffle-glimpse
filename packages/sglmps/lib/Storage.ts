import AsyncStorage from "@react-native-async-storage/async-storage";

const isWeb = typeof window !== "undefined";

export const Storage = {
  async getStorage(storageKey: string) {
    if (isWeb) {
      return localStorage.getItem(storageKey);
    } else {
      return AsyncStorage.getItem(storageKey);
    }
  },

  async setStorage(storageKey: string, value: string) {
    if (isWeb) {
      localStorage.setItem(storageKey, value);
    } else {
      await AsyncStorage.setItem(storageKey, value);
    }
  },
};
