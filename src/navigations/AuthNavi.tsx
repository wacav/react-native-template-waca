import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Join from '../screens/Join';

const Stack = createStackNavigator();
export default () => {
  return (
    <Stack.Navigator initialRouteName={'Login'}>
      <Stack.Screen name={'Login'} component={Login} options={{ title: '로그인' }} />
      <Stack.Screen name={'Join'} component={Join} options={{ title: '회원가입' }} />
    </Stack.Navigator>
  );
};
