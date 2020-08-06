import AsyncStorage from '@react-native-community/async-storage';

class Storage {
  static async getItem(key: string) {
    try {
      return JSON.parse((await AsyncStorage.getItem(key)) as string);
    } catch (error) {
      console.error(error);
    }
  }

  static async removeItem(key: string) {
    try {
      if (key) {
        await AsyncStorage.removeItem(key);
      }
    } catch (error) {
      console.error(error);
    }
  }

  static async setItem({ key, item }: { key: string; item: any }) {
    try {
      if (key && item) {
        await this.removeItem(key);
        await AsyncStorage.setItem(key, JSON.stringify(item));
      }
    } catch (error) {
      console.error(error);
    }
  }
}

export default Storage;
