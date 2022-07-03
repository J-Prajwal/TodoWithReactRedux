import * as types from "./todos.actionTypes";
const initialState = {
  todos: [],
  todoId: {},
  isLoading: false,
  isError: false,
};

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_TODOS: {
      return { ...state, todos: [...state.todos, payload] };
    }

    case types.GET_TODOS: {
      return { ...state, todos: payload };
    }

    case types.GET_TODO_BY_ID: {
      return { ...state, todoId: payload };
    }

    case types.REMOVE_TODO: {
      let newTodo = state.todos.filter((todo) => todo.id !== payload);
      return { ...state, todos: [...newTodo] };
    }

    case types.TOGGLE_TODO: {
      let newTodo = state.todos.map((todo) => {
        if (todo.id === payload.id) {
          todo.status = !todo.status;
        }
        return todo;
      });
      return { ...state, todos: newTodo };
    }

    default:
      return state;
  }
};
