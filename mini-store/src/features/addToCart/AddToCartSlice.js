import { createSlice } from "@reduxjs/toolkit";

const initialState = { products: [], cartCounter: 0 };

export const AddToCartSlice = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const isproductAdded = state.products.find(
        (p) => action.payload.id === p.id
      );

      if (isproductAdded) {
        alert("Product already in cart");
      } else {
        state.products.push(action.payload);
        state.cartCounter = state.products.length;
      }
    },
    removeProduct: (state, action) => {
      const removeProduct = state.products.filter(
        (p) => action.payload.id !== p.id
      );
      state.cartCounter = state.products.length - 1;
      state.products = removeProduct;
    },
    reduceQuantity: (state, action) => {
      const product = state.products.find((p) => action.payload.id === p.id);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
    increaseQuantity: (state, action) => {
      const product = state.products.find((p) => action.payload.id === p.id);
      if (product && product.quantity) {
        product.quantity += 1;
      }
    },
    submitForm: (state, action) => {
      state.products = [];
      state.cartCounter = 0;
    },
  },
});

export const {
  addCart,
  removeProduct,
  reduceQuantity,
  increaseQuantity,
  submitForm,
} = AddToCartSlice.actions;
export default AddToCartSlice.reducer;
