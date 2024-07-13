import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart';
import themeReducer from './theme'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        theme: themeReducer
        // user: ...
    }
})