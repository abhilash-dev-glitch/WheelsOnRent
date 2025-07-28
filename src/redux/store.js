// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "../features/wishlist/wishlistSlice"; // ✅ Import here

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
  },
});

export default store;
