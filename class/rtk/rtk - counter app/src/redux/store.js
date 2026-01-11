import { configureStore } from "@reduxjs/toolkit";
import   counterSlice   from "./featurs/counterSlice";
 
export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
