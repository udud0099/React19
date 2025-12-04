import React, { useState } from "react";

const TodoMyTry = () => {
  const [todo, setTodo] = useState([]);
  const [add, setAdd] = useState("");
  function addTodo(e) {
    e.preventDefault();
    setTodo([...todo, { task: add, don: false }]);
    console.log(add);
    console.log(todo);

    setAdd("");
  }
  function comTodo(i) {
    const newUpdatTodo = [...todo];
    newUpdatTodo[i] = { ...newUpdatTodo[i], don: !newUpdatTodo[i].don };
    setTodo(newUpdatTodo);
  }
  return (
    <div>
      <h1>Todo list</h1>
      <div>
        <form>
          <input
            type="text"
            value={add}
            onChange={(e) => setAdd(e.target.value)}
          />
          <button onClick={(e) => addTodo(e)}>Add</button>
        </form>
      </div>
      <br />
      {todo.map((t, i) => (
        <p key={i} onClick={() => comTodo(i)}>
          {t.task} {i} {t.don ? "don" : "not "}
        </p>
      ))}
      <br />
      <h1>Totol is {todo.length}</h1>
    </div>
  );
};

export default TodoMyTry;
