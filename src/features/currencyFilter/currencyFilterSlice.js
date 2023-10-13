export const setCurrency = (currency) => {
    return {
        type: 'currencyFilter/setCurrency',
        payload: currency
    }
}

const initialCurrencyFilter = 'USD';
export const currencyFilterReducer = (currencyFilter = initialCurrencyFilter, { type, payload }) => {
    switch (type) {
        case 'currencyFilter/setCurrency': {
            return payload
        }
        default: {
            return currencyFilter;
        }
    }
}

