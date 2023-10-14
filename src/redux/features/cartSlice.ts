import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CartItem {
  isSelected: boolean;
  productid: string;
  imgSrc: string;
  name: string;
  description: string;
  type: string;
  period: number;
  price: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    reset: () => initialState,
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const {
        isSelected,
        productid,
        imgSrc,
        name,
        description,
        type,
        period,
        price,
      } = action.payload;
      const existingItem = state.items.find(
        (item) => item.productid === productid
      );

      if (!existingItem) {
        state.items.push({
          isSelected,
          productid,
          imgSrc,
          name,
          description,
          type,
          period,
          price,
        });
      }
    },
    selectProduct: (state, action: PayloadAction<String>) => {
      state.items = state.items.map((item) => ({
        ...item,
        isSelected: item.productid === action.payload,
      }));
    },
    removeFromCart: (state, action: PayloadAction<String>) => {
      state.items = state.items.filter(
        (item) => item.productid !== action.payload
      );
    },
  },
});

// export const cartItems = (state: RootState) => state.cart.items;
// export const totalPriceSelector = createSelector([cartItems], (cartItems) =>
//   cartItems.reduce((total: number, curr: CartItem) => (total += curr.price), 0)
// );

export const { addToCart, selectProduct, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
