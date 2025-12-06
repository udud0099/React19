import React, { useState } from "react";
import Form from "./Form";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <h1>Todo Box</h1>
      <div>
        <Form setTodos={setTodos} todos={todos} />

        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
};

export default TodoApp;
