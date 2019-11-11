import React from 'react';
import Row from '../components/Common/Row';
import Text from '../components/Common/Text';
import { TouchableOpacity } from 'react-native';

export default ({ navigation }: { navigation: any }) => {
  return (
    <Row>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Join');
        }}>
        <Text>료근</Text>
      </TouchableOpacity>
    </Row>
  );
};
