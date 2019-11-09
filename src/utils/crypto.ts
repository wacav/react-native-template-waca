import {basicKey} from './../config/index';
import aesjs from 'aes-js';
import {Buffer} from 'buffer';

/**
 * @name : 암호화
 * @author : waca
 */
export const encrypt = (data: string): string => {
  const iv: any = Buffer.from(basicKey);
  const key = Buffer.from(iv);
  const aesCbc = new aesjs.ModeOfOperation.cbc(iv, key);
  const dataBytes = aesjs.utils.utf8.toBytes(data);
  const encryptedBytes = aesCbc.encrypt(aesjs.padding.pkcs7.pad(dataBytes));
  const hexEncrypt = aesjs.utils.hex.fromBytes(encryptedBytes);
  return hexEncrypt;
};

/**
 * @name : 해독
 * @author : waca
 * @issue : 한글 해독시 unicode 1 ~ 16 까지가 뒤에 붙어서 나옴 붙어서 나올떄 강제로 제거해서 변환하도록 함
 */
export const decrypt = (data: string): string => {
  const iv: any = Buffer.from(basicKey);
  const key = Buffer.from(iv);
  const aesCbc = new aesjs.ModeOfOperation.cbc(iv, key);
  const encryptedBytes = aesjs.utils.hex.toBytes(data);
  const decryptedBytes = aesCbc.decrypt(encryptedBytes);
  const newBytes = decryptedBytes.filter((byte: any) => byte > 16);
  let decrypted = aesjs.utils.utf8.fromBytes(newBytes);
  return decrypted;
};
