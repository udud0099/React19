import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodos }) => {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div>
      {sortedTodos.map((item, index) => (
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
