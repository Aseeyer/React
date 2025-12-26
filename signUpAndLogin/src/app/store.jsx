import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../features/products/productApi";
import cartReducer from "../features/cart/cartSlice";
import authReducer from "../store/authSlice";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    cart: cartReducer,
    auth: authReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
