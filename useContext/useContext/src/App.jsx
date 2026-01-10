import { useState } from "react";
import Parrent from "./components/Parrent";
import { MyContext } from "./useContext/context";
function App() {
  const [user, setUser] = useState({
    name: "john",
    age: 24,
    email: "john@gmail.com",
  });

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
