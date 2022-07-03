import { Route, Routes } from "react-router-dom";
import "./App.css";
import EditTodo from "./components/EditTodo";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import TodoId from "./components/TodoId";
import RequiredAuth from "./hoc/RequiredAuth";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <RequiredAuth>
              <Home />
            </RequiredAuth>
          }
        ></Route>
        <Route path="/todo/:id" element={<TodoId />}></Route>
        <Route path="/todo/:id/edit" element={<EditTodo />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
