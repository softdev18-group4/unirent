
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { imageList } from "../../constants";
import { ProductState, InitialState } from "@/types";


const initialState = {
  value: {
    specifications: {
      brand: "Example Brand",
      model: "GamerPro X",
      processor: "Intel Core i9",
      graphicCard: "NVIDIA GeForce RTX 3080",
      ramSize: 16,
      storageSize: 1000
    },
    availableDays: {
      startDate: "2023-09-15T00:00:00.000Z",
      endDate: "2023-09-15T00:00:00.000Z"
    },
    id: "6502cfbf89d76f38290ff5c5",
    name: "Gaming Laptop",
    description: "Powerful gaming laptop for immersive gaming experiences.",
    ownerId: "65016f4172559e91e72127df",
    availability: true,
    rentalOptions: [
      {
        id: "6502cfc089d76f38290ff5c6",
        productId: "6502cfbf89d76f38290ff5c5",
        type: "Daily",
        priceRate: 25.99
      },
      {
        id: "6502cfc089d76f38290ff5c8",
        productId: "6502cfbf89d76f38290ff5c5",
        type: "Monthly",
        priceRate: 549.99
      },
      {
        id: "6502cfc089d76f38290ff5c7",
        productId: "6502cfbf89d76f38290ff5c5",
        type: "Weekly",
        priceRate: 149.99
      }
    ],
    src: imageList,
    imageName : imageList
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
