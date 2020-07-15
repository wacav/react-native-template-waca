import React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { types } from 'mobx-state-tree';
import { observer } from 'mobx-react';

const Todo = types
  .model('Todo', {
    id: 0,
    content: '',
  })
  .actions((self) => ({
    addTodos(content: string) {
      self.id = 1;
      self.content = content;
    },
  }));

const todo = Todo.create();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View>
        <Text>111</Text>
        <Text>{todo.content}</Text>
        <Button
          onPress={() => {
            todo.addTodos('123123');
          }}>
          <Text>눌러봐</Text>
        </Button>
      </View>
    </>
  );
};
export default observer(App);

//#region style
const View = styled.SafeAreaView``;

const Text = styled.Text``;

const Button = styled.TouchableOpacity``;
//#endregion
