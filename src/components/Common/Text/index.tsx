import React, { useEffect, ReactNode } from 'react';
import { TextStyle, TextProps } from 'react-native';
import styled from 'styled-components/native';

interface ITextProps extends TextProps {
  children?: ReactNode;
  style?: TextStyle;
  small?: boolean;
  big?: boolean;
}

const Text = styled.Text<ITextProps>`
  font-size: ${props => (props.small ? 16 : props.big ? 24 : 20)};
`;
/**
 * Text Components
 * @small 16
 * @big 24
 * @default 20
 */
export default ({ children, style, small, big }: ITextProps) => {
  useEffect(() => {}, []);
  return (
    <Text allowFontScaling={false} style={{ ...style }} small={small} big={big}>
      {children}
    </Text>
  );
};
