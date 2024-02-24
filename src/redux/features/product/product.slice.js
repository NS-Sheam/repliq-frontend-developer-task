import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter((product) => product.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.products.find((product) => product.id === id);
      if (product) {
        product.quantity = quantity;
      }
    },
  },
});

export const { addProduct, removeProduct, updateQuantity } = productSlice.actions;
export default productSlice.reducer;
