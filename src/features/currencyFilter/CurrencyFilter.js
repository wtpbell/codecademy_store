import React from 'react';
import { currenciesData } from '../../data.js'
import { setCurrency } from './currencyFilterSlice';

export const CurrencyFilter = ( { currencyFilter, dispatch } ) => {
    const createCurrencyButton = (currency) => {
        return (
            <button
            className={`currency-button ${currencyFilter === currency && 'selected' } }`}
            key={currency}
            onClick={() => handleCurrencies(currency)}
            >
            {currency}
            </button>
        )
    }
    
    const handleCurrencies = (currency) => {
        dispatch(setCurrency(currency))
    }
    
    return (
        <div id='currency-filters-container'>
            <h3>Choose a currency</h3>
            {currenciesData.map(createCurrencyButton)}
        </div>
    )

    
}

