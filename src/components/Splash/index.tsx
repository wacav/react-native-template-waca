import React from 'react';
import styled from 'styled-components/native';

const View = styled.ImageBackground`
  flex: 1;
  width: 100%;
  background-color: #ffffff;
`;
export default () => <View source={require('./splash.jpg')}></View>;
