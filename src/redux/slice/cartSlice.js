import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],

  reducers: {
    addToCart: (state, action) => {
      const item = state.find(
        (i) => i.id === action.payload.id
      );

      if (item) {
        item.quantity += 1;
        item.totalPrice = item.quantity * item.price;
      } else {
        state.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        });
      }
    },

    removeCartItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },

    incrementCart: (state, action) => {
      const item = state.find((i) => i.id === action.payload);

      if (item) {
        item.quantity += 1;
        item.totalPrice = item.quantity * item.price;
      }
    },

    decrementCart: (state, action) => {
      const item = state.find((i) => i.id === action.payload);

      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          item.totalPrice = item.quantity * item.price;
        } else {
          // remove item if quantity becomes 0
          return state.filter((i) => i.id !== action.payload);
        }
      }
    },

    emptyCart: () => {
      return [];
    },
  },
});

export const {
  addToCart,
  removeCartItem,
  incrementCart,
  decrementCart,
  emptyCart,
} = cartSlice.actions;

export default cartSlice.reducer;