import { useMyContext } from "../useContext/context";
import GrandChild from "./GrandChild";

const Child = () => {
  const { user } = useMyContext();
  return (
    <div>
      <h1>Child Component</h1>
      <p>Name: {user?.name}</p>
      <p>Age: {user?.age}</p>
      <p>Email: {user?.email}</p>
      <br />
      <GrandChild />
    </div>
  );
};

export default Child;
