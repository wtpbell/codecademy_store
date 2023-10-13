import React from "react";
import { CurrencyFilter } from "../features/currencyFilter/CurrencyFilter";


export const App = ({state, dispatch}) => {
  return (
    <div>
      <CurrencyFilter 
        currencyFilter={state.currencyFilter} 
        dispatch={state}
      />
    </div>
  )
}