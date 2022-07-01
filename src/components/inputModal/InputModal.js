import React, {useState} from 'react';
import {Modal, Text, Pressable, View, TextInput} from 'react-native';
import Button from '../button/Button';
import {styles} from './InputModalStyle';

const App = props => {
  const {
    modalAppear,
    setModalAppear,
    todoInput,
    setTodoInput,
    onSubmitHandler,
    todos,
    updateTodo,
    setUpdateTodo,
    onCTAUpdate,
  } = props;
  const handleSubmit = () => {
    if (!updateTodo) {
      onSubmitHandler({
        title: todoInput,
        key: `${[todos.length]}`,
      });
    } else {
      onCTAUpdate({
        title: todoInput,
        key: updateTodo.key,
      });
    }
    setTodoInput('');
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalAppear}
        onRequestClose={() => {
          setModalAppear(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalHeaderText}>
                &#9997;&#127995; Add Todo
              </Text>
            </View>

            <TextInput
              style={styles.inputField}
              onChangeText={setTodoInput}
              value={todoInput}
              placeholder="&#9997; Enter Todo"
            />
            <View style={styles.todoModalButtons}>
              <Pressable
                style={styles.buttonClose}
                onPress={() => {
                  setModalAppear(false);
                  setTodoInput('');
                  setUpdateTodo(null);
                }}>
                <Button iconName="close" iconColor="#0d3b66" />
              </Pressable>
              <Pressable style={styles.buttonClose} onPress={handleSubmit}>
                <Button iconName="check" iconColor="#0d3b66" />
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default App;
