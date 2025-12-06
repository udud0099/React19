import React from "react";

const TodoItem = ({ item, todos, setTodos, index }) => {
  function deleteitem(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }

  //   my try it is working
  //   function setDon(item) {
  //     let newTodo = [...todos];
  //     newTodo[index] = { ...item, done: !newTodo[index].done };
  //     return setTodos(newTodo);
  //   }

  function setDon(item) {
    /* const newTodo = todos.map(
      (todo) => (todo.name === item.name ? { ...todo, done: !todo.done } : todo)
      //     // todo === item ? { ...todo, done: !todo.done } : { ...todo }
    );
    setTodos(newTodo); */
    setTodos(
      todos.map(
        (todo) =>
          todo.name === item.name ? { ...todo, done: !todo.done } : todo
        // todo === item ? { ...todo, done: !todo.done } : { ...todo }
      )
    );
  }
  return (
    <div>
      <p onClick={() => setDon(item, index)}>{item.name}</p>
      <p>{item.done ? "not don" : "it is don"}</p>
      <span>
        <button onClick={() => deleteitem(item)}>X</button>
      </span>
    </div>
  );
};

export default TodoItem;
