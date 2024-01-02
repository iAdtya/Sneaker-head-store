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
      const response = await axios.get("https://sneakerapi.live/api/products");
      return response.data.products;
    } catch (error) {
      console.error(error);
    }
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (product) => {
    try {
      const response = await axios.post(
        "https://sneakerapi.live/api/addProduct",
        product
      );
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
    checkout: (state, action) => {
      state.orders.push({ items: [...state.cart], total: action.payload });
      localStorage.setItem("orders", JSON.stringify(state.orders));
      state.cart = [];
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      localStorage.setItem("products", JSON.stringify(state.products));
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.products = action.payload;
      localStorage.setItem("products", JSON.stringify(state.products));
    });
  },
});

export const productReducer = productSlice.reducer;

export const { addToCart, deleteProduct, checkout } = productSlice.actions;

export const productSelector = (state) => state.productReducer.products;
