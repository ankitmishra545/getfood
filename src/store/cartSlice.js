import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    restaurant: {},
  },
  reducers: {
    addItem: (state, action) => {
      state.cartItems.push(action.payload);
    },

    removeItem: (state, action) => {
      const itemIndex = state.cartItems.findIndex((item) => item.id == action.payload);
      state.cartItems.splice(itemIndex, 1);
    },

    clearItem: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
    },

    addRestaurant: (state, action) => {
      if (state.restaurant.id !== action.payload.id) {
        state.cartItems.length = 0;
        state.restaurant = action.payload;
      }
    },
  },
});

export const { addItem, removeItem, clearItem, addRestaurant } = cartSlice.actions;

export default cartSlice.reducer;
