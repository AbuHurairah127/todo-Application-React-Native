import {Alert} from 'react-native';
import uuid from 'react-native-uuid';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from './../../store/actions/todoAction';
const useInputModal = () => {
  const [todoInput, setTodoInput] = useState('');
  const [updateTodo, setUpdateTodo] = useState(null);
  const dispatch = useDispatch();
  const onSubmitHandler = () => {
    let todo = {
      title: todoInput,
      key: uuid.v4(),
    };
    if (!todoInput) {
      Alert.alert('Please! Fill the input field properly.');
    } else {
      dispatch(addTodo(todo));
      setTodoInput('');
    }
  };
  return {onSubmitHandler, setUpdateTodo, updateTodo, setTodoInput, todoInput};
};

export default useInputModal;
