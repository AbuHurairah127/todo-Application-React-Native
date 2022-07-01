import React, {useState} from 'react';
import {style} from './HomeStyle';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import Header from '../components/header/Header';

import TodoList from '../components/todoList/TodoList';

const Home = () => {
  const fakeTodos = [
    {
      title: 'Buy a Bike',
      key: '1',
    },
    {
      title: 'Buy a Car',
      key: '2',
    },
    {
      title: 'Buy a House',
      key: '3',
    },
    {
      title: 'Buy a Banglow',
      key: '4',
    },
    {
      title: 'Buy a Farm House',
      key: '5',
    },
  ];
  const [todos, setTodos] = useState(fakeTodos);

  const deleteAllHandler = () => {
    setTodos([]);
  };
  console.log('App Running');
  return (
    <View style={style.container}>
      <View style={style.headerContainer}>
        <Header deleteAll={deleteAllHandler} />
      </View>
      <View style={style.todoListContainer}>
        <TodoList todos={todos} setTodos={setTodos} />
      </View>
    </View>
  );
};

export default Home;
