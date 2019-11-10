import permission, { Permission } from 'react-native-permissions';

export const checkAndRequest = async (request: Permission) => {
  const isPermission = await permission.check(request);
  if (isPermission === 'unavailable') {
    const res = await permission.request(request);
    return res === 'granted';
  } else if (isPermission === 'granted') {
    return true;
  } else {
    return false;
  }
};

export const check = async (request: Permission) => {
  const isPermission = await permission.check(request);
  return isPermission === 'granted';
};
