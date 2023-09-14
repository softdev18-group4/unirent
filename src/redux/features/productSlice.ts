
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { imageList } from "../../../constants";



const initialState = {
  value: {
    id: 0,
    name: "Macbook Pro 2020",
    description: "Apple",
    providerId: "_id1fg515432",
    provider: "Mewpk",
    src: imageList
  } as ProductState
} as InitialState

export const product = createSlice({
  name: "product",
  initialState,
  reducers: {
    reset: () => initialState,
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    updateProduct: (state, action: PayloadAction<ProductState>) => {
      state.value = action.payload;
    },
    // decrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value -= action.payload;
    // },
  },
});

export const {
  // increment,
  // incrementByAmount,
  // decrement,
  // decrementByAmount,
  updateProduct,
  reset,
} = product.actions;

export const productReducer =  product.reducer;
