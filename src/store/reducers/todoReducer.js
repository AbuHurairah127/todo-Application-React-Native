import {ADD_TODO, DELETE_ALL, DELETE_TODO} from '../types/constants';

let initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      let newTodos = [...state.todos, action.payload];
      return {
        ...state,
        todos: newTodos,
      };
    }
    case DELETE_ALL: {
      let newTodos = [];
      return {
        ...state,
        todos: newTodos,
      };
    }
    case DELETE_TODO: {
      let newTodos = state.todos.filter(item => {
        item.key != action.payload;
      });
      return {
        ...state,
        todos: newTodos,
      };
    }

    default:
      return state;
  }
};

export default todoReducer;
