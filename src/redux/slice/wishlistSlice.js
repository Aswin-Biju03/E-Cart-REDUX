import { createSlice } from "@reduxjs/toolkit";

const wishtlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    addToWishlist: (state, action) => {
      state.push(action.payload);
    },
    removeWishlist: (state, action) => {
      return state.filter((item) => item?.id != action.payload);
    },
  },
});

export const { addToWishlist, removeWishlist } = wishtlistSlice.actions;
export default wishtlistSlice.reducer;
