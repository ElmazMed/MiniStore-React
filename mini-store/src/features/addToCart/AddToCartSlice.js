import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0, products: {} };

export const AddToCartSlice = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    addCart: (state, action) => {},
  },
});

export const { addCart } = AddToCartSlice.actions;
export default AddToCartSlice.reducer;
