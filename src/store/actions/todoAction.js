import {ADD_TODO} from '../types/constants';
export const addTodo = data => {
  return {
    type: ADD_TODO,
    payload: data,
  };
};
