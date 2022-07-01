import React, {useState} from 'react';
import {style} from './HomeStyle';
import {TouchableOpacity, View} from 'react-native';
import Header from '../components/header/Header';
import TodoList from '../components/todoList/TodoList';

import InputModal from '../components/inputModal/InputModal';
import Button from '../components/button/Button';

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
  const [modalAppear, setModalAppear] = useState(false);

  const deleteAllHandler = () => {
    setTodos([]);
  };
  console.log('App Running');
  return (
    <View style={style.container}>
      {!modalAppear ? (
        <View style={style.container}>
          <View style={style.headerContainer}>
            <Header deleteAll={deleteAllHandler} />
          </View>
          <View style={style.todoListContainer}>
            <TodoList todos={todos} setTodos={setTodos} />
          </View>
          <View>
            <TouchableOpacity onPress={() => setModalAppear(!modalAppear)}>
              <Button
                iconName="add-circle"
                iconColor="#faf0ca"
                modalAppear={modalAppear}
                setModalAppear={setModalAppear}
              />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={style.todoModalContainer}>
          <InputModal
            modalAppear={modalAppear}
            setModalAppear={setModalAppear}
          />
        </View>
      )}
    </View>
  );
};

export default Home;
