import { useEffect, useState } from "react";
import Parrent from "./components/Parrent";
import { MyContext } from "./ContextApi/Context";

function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("is-open")) || {
      name: "john",
      age: 24,
      email: "john@gmail.com",
    }
  );
  useEffect(() => {
    localStorage.setItem("is-open", JSON.stringify(user));
  }, [user, setUser]);

  return (
    <>
      <MyContext.Provider value={{ user, setUser }}>
        <h1 className="text-4xl text-red-900">hello</h1>
        <Parrent />
      </MyContext.Provider>
    </>
  );
}

export default App;
