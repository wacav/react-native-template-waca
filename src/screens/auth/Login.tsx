import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const View = styled.View``;

const Login = () => {
  const navigation = useNavigation();
  console.log(navigation);
  return <View />;
};

export default Login;
