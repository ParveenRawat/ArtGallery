import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (state, action) => {
      state.cartItems.push(action.payload);
    },
  },
});

export const { setCartItems } = cartSlice.actions;

export default cartSlice.reducer;
