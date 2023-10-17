import { cartReducer } from "../features/cart/cartSlice";
import { currencyFilterReducer } from "../features/currencyFilter/currencyFilterSlice";
import { inventoryReducer } from "../features/inventory/inventorySlice";
import { searchTermReducer } from "../features/searchTerm/searchTermSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore ({
    reducer: {
        inventory: inventoryReducer,
        cart: cartReducer,
        currencyFilter: currencyFilterReducer,
        searchTerm: searchTermReducer
    }
})

export default store;



