import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 1,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementby5: (state) => {
      state.value += 5;
    },
    incrementbyAmount: (state, actions) => {
      state.value += actions.payload;
    },
  },
});

export const { increment, decrement, incrementby5, incrementbyAmount } =
  counterSlice.actions;
export default counterSlice.reducer;
