import React, { useEffect, ReactNode } from 'react';
import { Keyboard, TouchableWithoutFeedback, StyleProp, ViewStyle } from 'react-native';

/**
 * @description 화면 클릭시 키보드 내려가도록 설정
 */
export default ({ children, style }: { children: ReactNode; style?: StyleProp<ViewStyle> }) => {
  useEffect(() => {}, []);
  return (
    <TouchableWithoutFeedback style={style} onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
};
