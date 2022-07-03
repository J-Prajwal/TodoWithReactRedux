import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoApi, getTodosApi } from "../store/Todos/todos.actions";
import TodoList from "./TodoList";

const Home = () => {
  const [tasks, setTasks] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    let obj = {
      title: tasks,
      status: false,
    };
    addTodoApi(obj, dispatch);
  };

  useEffect(() => {
    getTodosApi(dispatch);
  }, [dispatch]);

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        placeholder="Enter task..."
        value={tasks}
        onChange={(e) => setTasks(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
      <br />
      <TodoList />
    </div>
  );
};

export default Home;
