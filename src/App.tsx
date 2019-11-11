import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { NavigationNativeContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import theme from './utils/theme';
import Splash from './components/Splash';
import { createStackNavigator } from '@react-navigation/stack';
import { observer } from 'mobx-react';
import { userStore } from './stores/User';
import AuthNavi from './navigations/AuthNavi';
const Stack = createStackNavigator();

export default observer(() => {
  const [isLoaded, setLoaded] = useState(false);
  const preload = async () => {
    try {
      // Yello Box Disabled
      if (__DEV__) {
        console.disableYellowBox = true;
      }
      // user Login
      await userStore.preLoad();

      setTimeout(() => {
        setLoaded(true);
      }, 2000);
    } catch (error) {}
  };
  useEffect(() => {
    preload();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <NavigationNativeContainer>
        <StatusBar barStyle="dark-content" />
        <Stack.Navigator headerMode={'none'}>
          {isLoaded && userStore.isLoggedIn !== null ? (
            userStore.isLoggedIn ? (
              <Stack.Screen name={'LoginNavi'} component={AuthNavi} />
            ) : (
              <Stack.Screen name={'LoginNavi'} component={AuthNavi} />
            )
          ) : (
            <Stack.Screen name={'LoginNavi'} component={Splash} />
          )}
        </Stack.Navigator>
      </NavigationNativeContainer>
    </ThemeProvider>
  );
});
