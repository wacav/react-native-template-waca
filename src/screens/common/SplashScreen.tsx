import React from 'react';
import styled from 'styled-components/native';

//#region style
const SplashView = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const LoadingText = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;
//#endregion

const SplashScreen = () => {
  return (
    <SplashView>
      <LoadingText>Loading......</LoadingText>
    </SplashView>
  );
};

export default SplashScreen;
