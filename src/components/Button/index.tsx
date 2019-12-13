import React from 'react';
import styled from 'styled-components/native';
import { Text } from '../Common/Text';
import { BLUE_6, GRAY_0, RED_8, GRAY_7, GRAY_8, GRAY_1, GRAY_6 } from '../../utils/color';
import { TouchableOpacityProps, ActivityIndicator } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

// 버튼 컨테이너 스타일
const ButtonContainer = styled.TouchableOpacity<{
  block?: boolean;
  type?: 'default' | 'primary' | 'error' | 'link';
}>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 4px;

  height: 48px;
  ${props => (props.block ? 'flex: 1;' : null)};
  ${props => {
    if (props.type === 'link') {
      return '';
    }
    const suffix = 'background-color:';
    const preffix = 'padding: 0 20px;';
    let bg = '';
    if (props.type === 'primary') {
      bg = BLUE_6;
    } else if (props.type === 'error') {
      bg = RED_8;
    } else {
      bg = GRAY_1;
    }
    if (props.disabled) {
      bg = GRAY_7;
    }
    return `${suffix}${bg};${preffix}`;
  }};
  ${props => (props.type === 'default' ? `border: 1px solid ${GRAY_6}` : null)};
`;
// 버튼 텍스트 스타일
const ButtonText = styled(Text)<{ type?: 'default' | 'primary' | 'error' | 'link' }>`
  font-weight: bold;
  color: ${props => (props.type === 'link' ? BLUE_6 : props.type === 'default' ? GRAY_8 : GRAY_0)};
  margin: 0 8px;
`;

export default ({ type = 'default', block, children, prefix, suffix, loading, ...props }: IButtonProps) => {
  return (
    <ButtonContainer {...props} block={block} type={type} onPress={props.onPress} disabled={loading}>
      {prefix && <AntDesign name={prefix} size={16} color={GRAY_0} />}
      {loading ? <ActivityIndicator color={'white'} /> : <ButtonText type={type}>{children}</ButtonText>}
      {suffix && <AntDesign name={suffix} size={16} color={GRAY_0} />}
    </ButtonContainer>
  );
};

interface IButtonProps extends TouchableOpacityProps {
  type?: 'default' | 'primary' | 'error' | 'link';
  children: React.ReactNode;
  prefix?: string;
  suffix?: string;
  block?: boolean;
  loading?: boolean;
}
