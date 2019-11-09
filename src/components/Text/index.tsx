import React, { useEffect, ReactNode } from 'react';
import { Text } from 'react-native';

export default ({ children }: { children?: ReactNode }) => {
  useEffect(() => {}, []);
  return <Text allowFontScaling={false}></Text>;
};
