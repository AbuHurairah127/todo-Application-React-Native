import React, {useState} from 'react';
import {style} from './HomeStyle';
import {TouchableOpacity, View} from 'react-native';
import Header from '../../components/header/Header';
import TodoList from '../../components/todoList/TodoList';
import InputModal from '../../components/inputModal/InputModal';
import Button from '../../components/button/Button';
import {useSelector} from 'react-redux';

const Home = () => {
  const fakeTodos = useSelector(store => store.todoReducer);
  const [todoInput, setTodoInput] = useState('');
  const [updateTodo, setUpdateTodo] = useState(null);
  const [todos, setTodos] = useState(fakeTodos);
  const [modalAppear, setModalAppear] = useState(false);
  const onSubmitHandler = todo => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    setModalAppear(false);
  };
  const onUpdateHandler = todo => {
    setUpdateTodo(todo);
    setModalAppear(true);
    setTodoInput(todo.title);
  };
  const onCTAUpdate = editedTodo => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex(todo => todo.key === editedTodo.key);
    newTodos.splice(todoIndex, 1, editedTodo);
    setTodos(newTodos);
    setModalAppear(false);
    setUpdateTodo(null);
  };
  const deleteAllHandler = () => {
    setTodos([]);
  };
  return (
    <View style={style.container}>
      {!modalAppear ? (
        <View style={style.container}>
          <View style={style.headerContainer}>
            <Header deleteAll={deleteAllHandler} />
          </View>
          <View style={style.todoListContainer}>
            <TodoList
              todos={todos}
              setTodos={setTodos}
              onUpdateHandler={onUpdateHandler}
            />
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
            todoInput={todoInput}
            setTodoInput={setTodoInput}
            onSubmitHandler={onSubmitHandler}
            todos={todos}
            updateTodo={updateTodo}
            setUpdateTodo={setUpdateTodo}
            onCTAUpdate={onCTAUpdate}
          />
        </View>
      )}
    </View>
  );
};

export default Home;
