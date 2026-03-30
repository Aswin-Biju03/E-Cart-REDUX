import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slice/productSlice";

const cartStore = configureStore({
  reducer: {
    productReducer: productSlice,
    wishlistReducer: {},
    cartReducer: {},
  },
});

export default cartStore;
