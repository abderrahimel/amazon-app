import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import cartReducer from '../features/cart/cartSlice'
export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer
  },
});
