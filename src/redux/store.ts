import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./features/productSlice";
import cartReducer from "./features/cartSlice";

export const store = configureStore({
  reducer: {
    productReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
