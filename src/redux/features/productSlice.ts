
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { imageList } from "../../../constants";
import { ProductState, InitialState } from "@/types";


const initialState = {
  value: {
    _id: {
      $oid: "6502cfbf89d76f38290ff5c5"
    },
    name: "Gaming Laptop",
    description: "Powerful gaming laptop for immersive gaming experiences.",
    ownerId: {
      $oid: "65016f4172559e91e72127df"
    },
    availability: true,
    specifications: {
      brand: "Example Brand",
      model: "GamerPro X",
      processor: "Intel Core i9",
      graphicCard: "NVIDIA GeForce RTX 3080",
      ramSize: {
        $numberLong: "16"
      },
      storageSize: {
        $numberLong: "1000"
      }
    },
    availableDays: {
      startDate: {
        $date: "2023-09-15T00:00:00.000Z"
      },
      endDate: {
        $date: "2023-09-15T00:00:00.000Z"
      }
    },
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

export const productReducer = product.reducer;
