const initialSearchTerm = '';
export const searchTermReducer = (state = initialSearchTerm, {type, payload}) => {
    switch(type) {
        case 'seachTerm/setSearchTerm':{
            return payload;
        }
        case 'seachTerm/clearSearchTerm':{
            return '';
        }
        default: 
        return state;
    }

}

export const setSearchTerm = (term) => {
    return {
        type: 'seachTerm/setSearchTerm',
        payload: term
    }
}

export const clearSearchTerm = () => {
    return {
        type: 'seachTerm/clearSearchTerm',
    }
}