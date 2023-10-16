import React from "react";
import { CurrencyFilter } from "../features/currencyFilter/CurrencyFilter";
import { Inventory } from "../features/inventory/Inventory";
import { Cart } from "../features/cart/Cart";


export const App = ({state, dispatch}) => {
  return (
    <div>
      <CurrencyFilter 
        currencyFilter = {state.currencyFilter} 
        dispatch = {dispatch}
      />
      <Inventory 
        inventory = {state.inventory}
        dispatch = {dispatch}
        currencyFilter={state.currencyFilter} 
      />

      <Cart 
        cart = {state.cart}
        dispatch = {dispatch}
        currencyFilter = {state.currencyFilter}
      />
    </div>
  )
}