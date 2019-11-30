import React, { useState, createRef, useRef, Ref } from 'react';
import Row from '../components/Common/Row';
import Text from '../components/Common/Text';
import { TouchableOpacity, TextInput } from 'react-native';
import BorderInput from '../components/Input/BorderInput';
import useForm from 'react-hook-form';

export default ({ navigation }: { navigation: any }) => {
  const { register, handleSubmit, setValue } = useForm();

  const cccc = (a: any) => {
    console.log(a);
  };
  return (
    <>
      <Row>
        <BorderInput
          ref={register({ name: 'name1', required: true })}
          onChangeText={text => {
            setValue('name1', text, true);
          }}
        />
      </Row>
      <Row>
        <TouchableOpacity onPress={handleSubmit(cccc)}>
          <Text>료근</Text>
        </TouchableOpacity>
      </Row>
    </>
  );
};
