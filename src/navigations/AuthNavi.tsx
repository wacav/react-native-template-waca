import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';

const Stack = createStackNavigator();
export default () => {
  return (
    <Stack.Navigator initialRouteName={'Login'}>
      <Stack.Screen name={'Login'} component={Login} options={{ title: '로그인' }} />
    </Stack.Navigator>
  );
};
