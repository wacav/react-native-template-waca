import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';
import { NavigationNativeContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import theme from './utils/theme';
import { encrypt, decrypt } from './utils/crypto';

export default () => {
  const preload = async () => {
    const enc = encrypt('안녕하세요');
    console.log(enc);
    const dec = decrypt(enc);
    console.log(dec);
  };
  useEffect(() => {
    preload();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <NavigationNativeContainer>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <Text allowFontScaling={false}>111</Text>
        </SafeAreaView>
      </NavigationNativeContainer>
    </ThemeProvider>
  );
};
