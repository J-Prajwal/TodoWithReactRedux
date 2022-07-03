import axios from "axios";
import * as types from "./todos.actionTypes";

export const addTodoApi = (tasks, dispatch) => {
  axios.post("http://localhost:8080/todos", tasks).then((res) => {
    dispatch({ type: types.ADD_TODOS, payload: res.data });
  });
};

export const getTodosApi = (dispatch) => {
  axios.get("http://localhost:8080/todos").then((res) => {
    dispatch({ type: types.GET_TODOS, payload: res.data });
  });
};

export const getTodoById = (id, dispatch) => {
  axios
    .get(`http://localhost:8080/todos/${id}`)
    .then((res) => dispatch({ type: types.GET_TODO_BY_ID, payload: res.data }));
};

export const removeTodo = (id, dispatch) => {
  axios.delete(`http://localhost:8080/todos/${id}`).then((res) => {
    dispatch({ type: types.REMOVE_TODO, dispatch: res.data });
  });
};

export const toggleTodo = (todo, dispatch) => {
  axios.patch(`http://localhost:8080/todos/${todo.id}`).then((res) => {
    dispatch({ type: types.TOGGLE_TODO, payload: todo });
  });
};

export const editTodo = (id, value, dispatch) => {
  axios
    .patch(`http://localhost:8080/todos/${id}`, { title: value })
    .then((res) => {
      dispatch({ type: types.EDIT_TODO, payload: res.data });
    });
};
