import { userKey } from './../config/index';
import { encrypt, decrypt } from './crypto';
import AsyncStorage from '@react-native-community/async-storage';
/**
 * 암호화 하여 저장
 * @param key 저장할 키
 * @param item 저장할 아이템
 */
export const setItem = async (key: string, item: any) => {
  try {
    await AsyncStorage.removeItem(key);
    await AsyncStorage.setItem(key, encrypt(JSON.stringify(item)));
  } catch (error) {}
};

/**
 * 암호화 해제하여 가져온다.
 * @param key 저장한 키
 */
export const getItem = async (key: string) => {
  try {
    const item = await AsyncStorage.getItem(key);
    if (item) {
      return JSON.parse(decrypt(item));
    } else {
      return null;
    }
  } catch (error) {}
};

/**
 * 유저 데이터 저장 (아이디 비밀번호 값)
 */
export const setUserData = async (userData: any) => {
  await setItem(userKey, userData);
};

/**
 * 유저 데이터 가져오기
 * 아이디 비밀번호
 */
export const getUserData = async () => {
  return await getItem(userKey);
};
