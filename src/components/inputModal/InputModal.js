import React from 'react';
import {Alert, Modal, Text, Pressable, View, TextInput} from 'react-native';
import Button from '../button/Button';
import {style} from '../header/HeaderStyle';
import {styles} from './InputModalStyle';

const App = props => {
  const {modalAppear, setModalAppear} = props;
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalAppear}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalAppear(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalHeaderText}>
                &#9997;&#127995; Add Todo
              </Text>
              <Pressable
                style={styles.buttonClose}
                onPress={() => setModalAppear(false)}>
                <Button iconName="close" iconColor="#0d3b66" />
              </Pressable>
            </View>
            <TextInput style={styles.inputField}></TextInput>
            <View style={styles.todoModalButtons}>
              <Pressable
                style={styles.buttonClose}
                onPress={() => setModalAppear(false)}>
                <Button iconName="delete-outline" iconColor="#0d3b66" />
              </Pressable>
              <Pressable
                style={styles.buttonClose}
                onPress={() => setModalAppear(false)}>
                <Button iconName="add-box" iconColor="#0d3b66" />
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default App;
