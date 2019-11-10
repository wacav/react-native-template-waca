import { Dimensions } from 'react-native';

/**
 * 해당 파일은 Template 입니다.
 * copy and paste name change index.template.ts -> index.ts
 */
// 로컬 테스트 여부
const IS_LOCAL = true;

// 암호화 키
export const basicKey = '';

// 유저 데이터 키
export const userKey = '';

// axios URL
export const BASE_URL = IS_LOCAL && __DEV__ ? '' : __DEV__ ? '' : '';

export const SUB_BASE_URL = IS_LOCAL && __DEV__ ? '' : __DEV__ ? '' : '';

// API Key
export const API_KEY = '';
// SUB API KEY
export const SUB_API_KEY = '';

// Device
export const Device: {
  width: number;
  height: number;
  scale: number;
  fontScale: number;
} = Dimensions.get('screen');
