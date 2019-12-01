import React, { useEffect, ReactNode } from 'react';
import { TextProps } from 'react-native';
import styled from 'styled-components/native';
import { GRAY_9 } from '../../../utils/color';

interface ITextProps extends TextProps {
  children?: ReactNode;
}

const BaseText = styled.Text<ITextProps>`
  color: ${GRAY_9};
  letter-spacing: -0.3;
  font-size: 17px;
`;

export const Text = ({ children, ...props }: ITextProps) => {
  useEffect(() => {}, []);
  return (
    <BaseText allowFontScaling={false} {...props}>
      {children}
    </BaseText>
  );
};

export const Heading = styled(Text)`
  font-size: 32px;
  font-weight: bold;
  letter-spacing: -1.5;
`;
export const Title = styled(Text)`
  font-size: 26px;
  font-weight: bold;
  letter-spacing: -0.5;
`;
export const SubTitle = styled(Text)`
  font-size: 21px;
  font-weight: bold;
  letter-spacing: 0.25;
`;
export const Caption = styled(Text)`
  font-size: 14px;
  letter-spacing: 0.3;
`;
