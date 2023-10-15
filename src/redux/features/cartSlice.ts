import { CartItem } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
      //localStorage.setItem("cart", JSON.stringify(state.items));
    },
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

// export const cartItems = (state: RootState) => state.cart.items;
// export const totalPriceSelector = createSelector([cartItems], (cartItems) =>
//   cartItems.reduce((total: number, curr: CartItem) => (total += curr.price), 0)
// );

export const { addToCart, selectProduct, removeFromCart, setCart } =
  cartSlice.actions;
export default cartSlice.reducer;
