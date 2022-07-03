import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editTodo } from "../store/Todos/todos.actions";

const EditTodo = () => {
  const [value, setValue] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(value);
  const handleEditTodo = () => {
    editTodo(id, value, dispatch);
    navigate(`/todo/${id}`);
  };
  return (
    <div>
      <p>ID: {id}</p>
      <input
        type="text"
        placeholder="Edit Todo"
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleEditTodo}>Update</button>
    </div>
  );
};

export default EditTodo;
