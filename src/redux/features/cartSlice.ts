import { CartItem } from "@/types";
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

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
    setCart: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload;
    },
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const {
        isSelected,
        productid,
        rentalId,
        imgSrc,
        location,
        name,
        description,
        type,
        period,
        price,
        rentTime
      } = action.payload;
      const existingItem = state.items.find(
        (item) => item.productid === productid
      );

      if (!existingItem) {
        state.items.push({
          isSelected,
          productid,
          rentalId,
          imgSrc,
          location,
          name,
          description,
          type,
          period,
          price,
          rentTime
        });
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    selectProduct: (state, action: PayloadAction<String>) => {
      state.items = state.items.map((item) => ({
        ...item,
        isSelected: item.productid === action.payload,
      }));
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeFromCart: (state, action: PayloadAction<String>) => {
      state.items = state.items.filter(
        (item) => item.productid !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
  },
});

const cartItems = (state: RootState) => state.cart.items;
// export const totalPriceSelector = createSelector([cartItems], (cartItems) =>
//   cartItems.reduce((total: number, curr: CartItem) => (total += curr.price), 0)
// );
export const totalSelectedProduct = createSelector([cartItems], (items) =>
  items.reduce((total, item) => (item.isSelected ? total + 1 : total), 0)
);
export const SelectedProduct = createSelector(
  [cartItems],
  (items) => items.find((item) => item.isSelected === true) || null
);

export const { addToCart, selectProduct, removeFromCart, setCart } =
  cartSlice.actions;
export default cartSlice.reducer;
