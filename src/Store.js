import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Features/Cart/cartSlice";
import userReducer from './Features/user/userSlice';
export const store = configureStore({
    reducer: {
        cartState: CartReducer,
        userState: userReducer,
    }
})