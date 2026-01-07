import React, { useState } from "react";

const Form = ({ setTodos, todos }) => {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.name === "") return;
    setTodos([...todos, todo]);
    console.log(todos);
    setTodo({ name: "", done: false });
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo.name}
          onChange={(e) => setTodo({ ...todo, name: e.target.value })}
        />
        <button type="submit">add</button>
        {/* <input type="submit" value={"submit"} /> */}
      </form>
    </>
  );
};

export default Form;
