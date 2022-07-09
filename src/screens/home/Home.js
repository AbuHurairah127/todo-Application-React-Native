import React, {useState} from 'react';
import {style} from './HomeStyle';
import {TouchableOpacity, View} from 'react-native';
import Header from '../../components/header/Header';
import TodoList from '../../components/todoList/TodoList';
import InputModal from '../../components/inputModal/InputModal';
import Button from '../../components/button/Button';
import {useSelector} from 'react-redux';

const Home = () => {
  const todos = useSelector(store => store.todoReducer.todos);

  const [modalAppear, setModalAppear] = useState(false);

  return (
    <View style={style.container}>
      {!modalAppear ? (
        <View style={style.container}>
          <View style={style.headerContainer}>
            <Header />
          </View>
          <View style={style.todoListContainer}>
            <TodoList todos={todos} />
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
            todos={todos}
          />
        </View>
      )}
    </View>
  );
};

export default Home;
