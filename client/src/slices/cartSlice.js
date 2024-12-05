import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
  reducers: {
    setCart: (state, action) => {
      state.cartItems = action.payload;
      localStorage.setItem("cartItems", JSON.stringify(action.payload)); // Sync local storage
    },
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.title === action.payload.title,
      );

      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if the item exists
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 }); // Add new item with quantity = 1
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.title !== action.payload.title,
      );
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    updateQuantity: (state, action) => {
      const { title, quantity } = action.payload;
      const existingItem = state.cartItems.find((item) => item.title === title);

      if (existingItem) {
        if (quantity > 0) {
          existingItem.quantity = quantity; // Update quantity if valid
        } else {
          state.cartItems = state.cartItems.filter(
            (item) => item.title !== title,
          ); // Remove if quantity is 0
        }
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart: (state) => {
      state.cartItems = []; // Clear all cart items
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart, setCart } =
  cartSlice.actions;
export default cartSlice.reducer;
