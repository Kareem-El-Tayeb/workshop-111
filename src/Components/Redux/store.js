import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";

export const commerce = configureStore({
    reducer : cartSlice.reducer
})