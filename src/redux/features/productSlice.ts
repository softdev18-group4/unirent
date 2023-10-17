
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { imageList } from "../../constants";
import { ProductState, InitialState } from "@/types";


const initialState = {
  value: {
    specifications: {
      brand: "",
      model: "",
      processor: "",
      graphicCard: "",
      ramSize: 0,
      storageSize: 0
    },
    availableDays: {
      startDate: "2023-09-15T00:00:00.000Z",
      endDate: "2023-09-15T00:00:00.000Z"
    },
    id: "",
    name: "",
    description: "",
    ownerId: "",
    availability: true,
    rentalOptions: [
      {
        id: "",
        productId: "",
        type: "Daily",
        priceRate:0
      }
    ],
    src: imageList,
    imageName : imageList,
    owner : {
      email : "mew@example.com",
      firstName: "John",
      lastName: "Doe"
    }
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
