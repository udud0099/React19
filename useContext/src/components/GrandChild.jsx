import React, { useContext } from "react";
import { MyContext } from "../useContext/context";

const GrandChild = () => {
  const user = useContext(MyContext).user;
  const setUser = useContext(MyContext).setUser;

  return (
    <div>
      <br />
      <hr />
      <br />
      <h1>Grand Child Component</h1>
      <div>
        <input
          type="text"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <br />
        <br />
        <input
          type="number"
          value={user.age}
          onChange={(e) => setUser({ ...user, age: e.target.value })}
        />
      </div>
    </div>
  );
};

export default GrandChild;
