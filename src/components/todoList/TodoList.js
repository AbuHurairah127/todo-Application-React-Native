import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
const TodoList = props => {
  const deleteHandler = key => {
    let newTodos = props.todos.filter(todo => todo.key !== key);
    props.setTodos(newTodos);
  };

  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
      {props.todos.length === 0 ? (
        <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>
          'You have no TODOS to see'
        </Text>
      ) : (
        <SwipeListView
          data={props.todos}
          renderItem={item => (
            <View
              style={{
                backgroundColor: '#adb5bd',
                marginTop: 3,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                margin: 5,
                borderRadius: 10,
                paddingHorizontal: 5,
                minHeight: 50,
                paddingLeft: 25,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#212529',
                }}>
                {item.item.title}
              </Text>
            </View>
          )}
          renderHiddenItem={(data, rowMap) => (
            <View
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
                paddingHorizontal: 10,
              }}>
              <View
                style={{
                  backgroundColor: '#8d99ae',
                  padding: 5,
                  borderRadius: 50,
                  marginHorizontal: 3,
                }}>
                <TouchableOpacity>
                  <Icon name="edit" size={30} color="#edf2f4" />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  backgroundColor: '#6a040f',
                  padding: 5,
                  borderRadius: 50,
                  marginHorizontal: 3,
                }}>
                <TouchableOpacity onPress={() => deleteHandler(data.item.key)}>
                  <Icon name="delete" size={30} color="#d90429" />
                </TouchableOpacity>
              </View>
            </View>
          )}
          rightOpenValue={-100}
          disableRightSwipe
        />
      )}
    </View>
  );
};

export default TodoList;
