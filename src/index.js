import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import TodoList from "./TodoList";

var destination = document.querySelector("#container");

ReactDOM.render(
  <div>
    <h2>React TodoList</h2>
    <TodoList />
  </div>,
  destination
);
