import React, { useState, createRef, useRef, Ref } from 'react';
import Row from '../components/Common/Row';
import Text from '../components/Common/Text';
import { TouchableOpacity, TextInput } from 'react-native';
import BorderInput from '../components/Input/BorderInput';

export default ({ navigation }: { navigation: any }) => {
  const [value, setValue] = useState('');

  return (
    <>
      <Row>
        <BorderInput
          value={value}
          onChangeText={text => {
            setValue(text);
          }}
        />
      </Row>
      <Row>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Join');
          }}>
          <Text>료근</Text>
        </TouchableOpacity>
      </Row>
    </>
  );
};
