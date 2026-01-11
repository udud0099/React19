import { createContext } from "react";
import { useContext } from "react";

export const MyContext = createContext(null);

export function useMyContext() {
  const user = useContext(MyContext).user;
  const setUser = useContext(MyContext).setUser;
  if (!user || !setUser) {
    throw new Error("useMyContext must be used within a MyContext.Provider");
  }
  return { user, setUser };
}
