import React from 'react';
import {Alert, TextInput, View, Text} from 'react-native';
import Button from '../button/Button';
import {useState} from 'react';

const AddTodo = props => {
  const {todoModalLauncher} = props;
  const [todoTitle, setTodoTitle] = useState('');
  const onSubmitHandler = value => {
    if (!todoTitle) {
      Alert.alert('Please Enter Some Text');
    } else {
      setTodoTitle(value);
      console.log(todoTitle);
      todoModalLauncher();
    }
  };
  return (
    <View
      style={{
        backgroundColor: '#8ecae6',
        display: 'flex',
        borderRadius: 8,
      }}>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
        }}>
        <Text
          style={{
            fontSize: 25,
          }}>
          &#9997;
        </Text>{' '}
        Enter Your Todo's
      </Text>
      <View
        style={{
          backgroundColor: '#8ecae6',
        }}>
        <TextInput
          style={{
            height: 40,
            margin: 12,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: '#023047',
            padding: 10,
          }}
          onChangeText={value => {
            setTodoTitle(value);
          }}
          placeholder="&#9997; Enter Todo"
          name="title"></TextInput>
      </View>
      <View
        style={{
          justifySelf: 'end',
          alignSelf: 'flex-end',
          marginRight: 25,
          margin: 8,
          marginTop: 0,
        }}>
        <Button label="Add" event={value => onSubmitHandler(value)} />
      </View>
    </View>
  );
};

export default AddTodo;
