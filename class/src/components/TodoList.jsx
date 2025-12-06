import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div>
      {todos.map((item, index) => (
        <TodoItem
          key={index}
          item={item}
          todos={todos}
          setTodos={setTodos}
          index={index}
        />
      ))}
    </div>
  );
};

export default TodoList;
