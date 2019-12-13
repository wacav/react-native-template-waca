import React, { useState, createRef, useRef, Ref } from 'react';
import Row from '../components/Common/Row';
import { Text, Heading, SubTitle, Caption, Title } from '../components/Common/Text/index';
import { TouchableOpacity, TextInput } from 'react-native';
import BorderInput from '../components/Input/BorderInput';
import useForm from 'react-hook-form';
import Button from '../components/Button';
export default ({ navigation }: { navigation: any }) => {
  const { register, handleSubmit, setValue } = useForm();

  const [loading, setLoading] = useState(false);

  const cccc = (a: any) => {
    setLoading(true);
    console.log(a);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <Row>
        <BorderInput
          ref={register({ name: 'name1', required: true })}
          label={'아이디'}
          onChangeText={text => {
            setValue('name1', text, true);
          }}
        />
      </Row>

      <Row>
        <TouchableOpacity onPress={handleSubmit(cccc)}>
          <Heading>Lorem ipsum dolor</Heading>
        </TouchableOpacity>
      </Row>
      <Row>
        <TouchableOpacity onPress={handleSubmit(cccc)}>
          <Title>Lorem ipsum dolor</Title>
        </TouchableOpacity>
      </Row>
      <Row>
        <TouchableOpacity onPress={handleSubmit(cccc)}>
          <SubTitle>Lorem ipsum dolor</SubTitle>
        </TouchableOpacity>
      </Row>
      <Row>
        <TouchableOpacity onPress={handleSubmit(cccc)}>
          <Text>Lorem ipsum dolor</Text>
        </TouchableOpacity>
      </Row>
      <Row>
        <TouchableOpacity onPress={handleSubmit(cccc)}>
          <Caption>Lorem ipsum dolor</Caption>
        </TouchableOpacity>
      </Row>
      <Row style={{ marginHorizontal: 15 }}>
        <Button onPress={handleSubmit(cccc)} type={'primary'} loading={loading}>
          힘내자
        </Button>
      </Row>
    </>
  );
};
