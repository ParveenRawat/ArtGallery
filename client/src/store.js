import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import artReducer from "./slices/artSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    art: artReducer,
  },
});
