import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Button from '../components/button/Button';
import AddTodo from '../components/addTodo/AddTodo';
import TodoList from '../components/todoList/TodoList';

const Home = () => {
  const [isNavbarAppear, setIsNavbarAppear] = useState(false);
  const [isTodoButton, setIsTodoButton] = useState(true);
  const navbarToggler = () => {
    setIsNavbarAppear(!isNavbarAppear);
  };

  const todoModalLauncher = () => {
    setIsTodoButton(!isTodoButton);
  };
  return (
    <View
      style={{
        display: 'flex',
        minHeight: '100%',
      }}>
      <Header />
      <View
        style={{
          marginTop: 25,
        }}>
        {isTodoButton ? (
          <AddTodo todoModalLauncher={todoModalLauncher} />
        ) : (
          <Button event={todoModalLauncher} label="Add Todo" />
        )}
      </View>
      <View>
        <ScrollView>
          <TodoList />
        </ScrollView>
      </View>
      <View
        style={{
          marginTop: 'auto',
        }}>
        <Footer />
      </View>
    </View>
  );
};

export default Home;
