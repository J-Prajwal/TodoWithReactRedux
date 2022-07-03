import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeTodo, toggleTodo } from "../store/Todos/todos.actions";

const TodoList = () => {
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const handleRemoveTodo = (id) => {
    removeTodo(id, dispatch);
  };
  const toggleTodoHandler = (el) => {
    toggleTodo(el, dispatch);
  };

  return (
    <div>
      {todos.map((el) => (
        <div key={el.id}>
          {el.id}
          <Link
            to={`/todo/${el.id}`}
            style={
              el.status
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }
          >
            {el.title}
          </Link>
          <button onClick={() => toggleTodoHandler(el)}>
            {el.status ? "Mark as incomplete" : "Mark as complete"}
          </button>
          <button onClick={() => handleRemoveTodo(el.id)}>Remove Task</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
