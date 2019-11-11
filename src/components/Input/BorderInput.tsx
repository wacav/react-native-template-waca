import React, { useCallback, useEffect, useState, useMemo, forwardRef, useRef } from 'react';
import styled from 'styled-components/native';
import { TextInputProps, ViewStyle, TextStyle, Animated, TextInput } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Container = styled.View`
  width: 100%;
  height: 48px;
  border: 1px solid #333;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: white;
  margin-top: 10px;
`;
const Label = styled(Animated.Text)`
  position: absolute;
  left: 8px;
  padding: 0 5px;
  background-color: white;
  border-radius: 50px;
`;
const Input = styled.TextInput`
  width: 100%;
  font-size: 18px;
  padding-left: 10px;
  color: black;
`;

export default forwardRef(
  ({ value, containerStyle, labelStyle, secureTextEntry: secret, ...props }: IBorderInput, ref: React.Ref<any>) => {
    // Label Top Animation
    const [top] = useState(new Animated.Value(13));
    // Label FontSize Animation
    const [fontSize] = useState(new Animated.Value(14));
    // Active
    const [isActive, setActive] = useState(value || false);
    const [secureTextEntry, setSecureTextEntry] = useState(secret || false);
    // Focus Event
    const _onFocus = useCallback(event => {
      setActive(true);
      if (props.onFocus) {
        props.onFocus(event);
      }
    }, []);

    // Blur Event
    const _onBlur = useCallback(event => {
      if (!value) {
        setActive(false);
      }
      if (props.onBlur) {
        props.onBlur(event);
      }
    }, []);

    const _onChangeSecureTextEntry = useCallback(() => {
      setSecureTextEntry(!secureTextEntry);
    }, []);

    // Active Chanage Event
    useMemo(() => {
      if (isActive) {
        Animated.parallel([
          Animated.timing(top, { duration: 150, toValue: -8 }),
          Animated.timing(fontSize, { duration: 150, toValue: 14 }),
        ]).start();
      } else {
        Animated.parallel([
          Animated.timing(top, { duration: 150, toValue: 13 }),
          Animated.timing(fontSize, { duration: 150, toValue: 18 }),
        ]).start();
      }
    }, [isActive]);

    useEffect(() => {}, [value]);

    return (
      <Container>
        <Label allowFontScaling={false} style={[{ ...labelStyle }, { top, fontSize }]}>
          로그인
        </Label>
        <Input
          {...props}
          ref={ref}
          onFocus={_onFocus}
          onBlur={_onBlur}
          allowFontScaling={false}
          autoCapitalize={props.autoCapitalize || 'none'}
          secureTextEntry={secureTextEntry}
        />
        {secret && (
          <MaterialCommunityIcons
            name={secureTextEntry ? 'eye-outline' : 'eye-off-outline'}
            size={22}
            style={{ position: 'absolute', right: 12 }}
            onPress={_onChangeSecureTextEntry}
            // color={isError ? theme.danger : theme.borderColorBase}
          />
        )}
      </Container>
    );
  },
);

interface IBorderInput extends TextInputProps {
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
}
