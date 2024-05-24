import { configureStore } from "@reduxjs/toolkit";
import addCartReducer from "../features/addToCart/AddToCartSlice";
export const store = configureStore({
  reducer: {
    addCart: addCartReducer,
  },
});
