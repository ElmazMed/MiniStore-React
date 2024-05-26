import { configureStore } from "@reduxjs/toolkit";
import addCartReducer from "../features/addToCart/AddToCartSlice";
import removeProductReducer from "../features/addToCart/AddToCartSlice";
import reduceQuantityReducer from "../features/addToCart/AddToCartSlice";
import increaseQuantityReducer from "../features/addToCart/AddToCartSlice";
import submitFormReducer from "../features/addToCart/AddToCartSlice";

export const store = configureStore({
  reducer: {
    addCart: addCartReducer,
    removeProduct: removeProductReducer,
    reduceQuantity: reduceQuantityReducer,
    increaseQuantity: increaseQuantityReducer,
    submitForm: submitFormReducer,
  },
});
