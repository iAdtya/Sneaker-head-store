import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cart: [],
  orders: [],
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/products");
      return response.data.products;
    } catch (error) {
      console.error(error);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    addProducts: (state, action) => {
      state.products.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      localStorage.setItem("products", JSON.stringify(state.products));
    });
  },
});

export const productReducer = productSlice.reducer;

export const { addProducts, addToCart } = productSlice.actions;

export const productSelector = (state) => state.productReducer.products;
