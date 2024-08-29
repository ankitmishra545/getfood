import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },

    removeItem: (state, action) => {
      const itemIndex = state.findIndex((item) => item.id == action.payload);
      state = state.splice(itemIndex, 1);
    },

    clearItem: (state, action) => {
      state = state.filter((item) => item.id !== action.payload);
      // console.log(state.filter((item) => item.id !== action.payload));
    },
  },
});

export const { addItem, removeItem, clearItem } = cartSlice.actions;

export default cartSlice.reducer;
