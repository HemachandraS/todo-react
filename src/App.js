import React, { useEffect } from "react";
import "./styles.css";
import ABCinput from "./components/Inputt";
import XYZ from "./components/TodosList";
import { deleteAll, persistTodos } from "./redux/action/addTodo.action";
import { connect } from "react-redux";
const App = ({ deleteAll, persistTodos }) => {
  useEffect(() => {
    persistTodos();
  }, [persistTodos]);
  return (
    <div className="App">
      <h1 style={{ textDecoration: "underline" }}> Todos App</h1>
      <ABCinput />
      <XYZ />
      <div>
        <button
          style={{ marginTop: "20px", cursor: "pointer" }}
          onClick={deleteAll}
        >
          {" "}
          Delete All
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteAll: () => dispatch(deleteAll()),
  persistTodos: () => dispatch(persistTodos())
});
export default connect(null, mapDispatchToProps)(App);
