import { types } from 'mobx-state-tree';

// USER STORE
// 붕어빵 틀.
const userStore = types
  .model({
    userid: types.maybe(types.string),
    token: types.maybe(types.string),
    loading: false,
  })
  .views((self) => ({
    get isLoggedIn() {
      return self.userid === undefined;
    },
  }))
  .actions((self) => ({
    async loggedIn({
      loginId,
      password,
    }: {
      loginId: string;
      password: string;
    }) {
      if (loginId === 'admin' && password === 'admin') {
        self.userid = 'XEBs277a21458saxz';
        self.token = 'A.zfwerSADFweridsfgSDFas0ewrfdgd';
      }
    },
    async loggedOut() {
      self.userid = undefined;
      self.token = undefined;
    },
    afterCreate() {
      console.log('Created a new todo!');
      self.loading = true;
      setTimeout(() => {
        self.loading = false;
      }, 2000);
    },
  }));

// Create Store Instance
// 붕어빵 만들기.
const userInstance = userStore.create();

export default userInstance;
