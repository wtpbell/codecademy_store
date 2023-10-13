import { cartReducer } from "../features/cart/cartSlice";
import { currencyFilterReducer } from "../features/currencyFilter/currencyFilterSlice";
import { inventoryReducer } from "../features/inventory/inventorySlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore ({
    reducer: {
        cart: cartReducer,
        currencyFilter: currencyFilterReducer,
        inventory: inventoryReducer
    }
})

export default store;

