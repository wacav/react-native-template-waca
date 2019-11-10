import { observable } from 'mobx';
import { decrypt } from '../../utils/crypto';
import { getUserData } from '../../utils/storage';

/**
 * Type
 */
type TypeUserStore = {
  lgnId: string;
  lgnPw: string;
  isLoggedIn: null | boolean;
  loggedIn: Function;
  loggedOut: Function;
  preLoad: Function;
};
/**
 * USER STORE
 */
export const userStore = observable<TypeUserStore>({
  // 아이디
  lgnId: '',
  // 비밀번호
  lgnPw: '',
  // 로그인 여부
  isLoggedIn: null,
  async loggedIn() {
    try {
      /**
       * your Logged In Process In
       */
      setTimeout(() => {
        this.isLoggedIn = true;
      }, 2000);
    } catch (error) {}
  },
  /**
   * 유저 로그아웃
   */
  async loggedOut() {
    try {
      /**
       * your Logged In Process In
       */
      setTimeout(() => {
        this.isLoggedIn = false;
      }, 2000);
    } catch (error) {}
  },
  /**
   * 초기 유저 체크
   */
  async preLoad() {
    try {
      // 아이디:비밀번호
      const data = await getUserData();
      if (data) {
        // 암호화 해제하여 가져온다.
        const user = decrypt(data[0]);
        // 아이디 : 비밀번호
        const idpw = user.split(':');
        this.lgnId = idpw[0];
        this.lgnPw = idpw[1];
        this.loggedIn();
      } else {
        this.isLoggedIn = false;
      }
    } catch (error) {}
  },
});
