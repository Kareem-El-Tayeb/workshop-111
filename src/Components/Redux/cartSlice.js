import { createSlice } from "@reduxjs/toolkit";

const cartState = {
  cart: [],
  user: false,
  userName : ``
};
export const cartSlice = createSlice({
  name: "cart",
  initialState: cartState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    login : (state , action) => {
      state.user = true
      state.userName = action.payload
    }
  },
});
