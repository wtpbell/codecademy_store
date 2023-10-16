import React from "react";
import { CurrencyFilter } from "../features/currencyFilter/CurrencyFilter";
import { Inventory } from "../features/inventory/Inventory";
import { Cart } from "../features/cart/Cart";
import { SearchTerm } from "../features/searchTerm/SearchTerm"

export const App = ({state, dispatch}) => {
  return (
    <div>
       <SearchTerm
        searchTerm={state.searchTerm}
        dispatch={dispatch}
      />

      <CurrencyFilter 
        currencyFilter = {state.currencyFilter} 
        dispatch = {dispatch}
      />

      <Inventory 
        inventory = {getFilteredItems(state.inventory, state.searchTerm)}
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

function getFilteredItems(items, searchTerm) {
  return items.filter(items => items.name.toLowerCase().includes(searchTerm.toLowerCase()));
}