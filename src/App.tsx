import React, { useState, useMemo, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import useDarkMode from 'hooks/useDarkMode';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'screens/common/SplashScreen';
import userInstance from 'services/common/user';
import { observer } from 'mobx-react';
import Login from 'screens/auth/Login';
import Join from 'screens/auth/Join';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

const App = () => {
  const isDarkMode = useDarkMode();
  const isDevMode = useMemo(() => __DEV__, []);
  const [isLoaded, setLoaded] = useState(false);

  const preLoaded = async () => {
    try {
      setLoaded(false);
      setTimeout(() => {
        setLoaded(true);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(userInstance.loading);
  useEffect(() => {
    preLoaded();
  }, []);
  if (!isLoaded) {
    return <SplashScreen />;
  }
  return (
    <ThemeProvider theme={{}}>
      <NavigationContainer>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator>
          <Stack.Screen name={'Login'} component={Login} />
          <Stack.Screen name={'Join'} component={Join} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default observer(App);
