import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getTodoById } from "../store/Todos/todos.actions";

const TodoId = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { todoId } = useSelector((state) => state.todo);
  console.log(todoId);

  const { title, status } = todoId;

  useEffect(() => {
    getTodoById(id, dispatch);
  }, [dispatch, id]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "30%",
          margin: "auto",
        }}
      >
        <h5>ID: {id}</h5>
        <h5
          style={
            status
              ? { textDecoration: "line-through" }
              : { textDecoration: "nono" }
          }
        >
          {title}
        </h5>
        <h5>{status ? "Completed" : "Incomplete"}</h5>
      </div>
      <Link to={`/todo/${id}/edit`}>
        <button>Update</button>
      </Link>
    </div>
  );
};

export default TodoId;
