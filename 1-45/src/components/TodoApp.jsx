import React, { useState } from "react";
import Form from "./Form";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const totalDon = todos.filter((todo) => todo.done).length

  return (
    <>
      <h1>Todo Box</h1>
      <div>
        <Form setTodos={setTodos} todos={todos} />

        <TodoList todos={todos} setTodos={setTodos} />
      </div>

      <div>
        <h1>Totola no. of completed {totalDon}</h1>
        <h1>Totola task to pending {todos.length - totalDon}</h1>
      </div>
    </>
  );
};

export default TodoApp;
