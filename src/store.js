import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/Cart/cartSlice"
import modalReducer from "./features/Modal/modalSlice"






const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal: modalReducer,
    }
})



export default store;
