import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

const addToCard = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state) => {
      state.value += 1;
    },
  },
});

export const { addItem } = addToCard.actions;
export default addToCard.reducer;
