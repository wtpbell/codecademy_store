import React from "react";
import { CurrencyFilter } from "../features/currencyFilter/CurrencyFilter";
import { Inventory } from "../features/inventory/Inventory";


export const App = ({state, dispatch}) => {
  return (
    <div>
      <CurrencyFilter 
        currencyFilter={state.currencyFilter} 
        dispatch={dispatch}
      />
      <Inventory 
        inventory = {state.inventory}
        dispatch = {dispatch}
        currencyFilter={state.currencyFilter} 
      />
    </div>
  )
}