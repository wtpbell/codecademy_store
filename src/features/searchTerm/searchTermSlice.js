const initialSearchTerm = '';
export const searchTermReducer = (state = initialSearchTerm, {type, payload}) => {
    switch(type) {
        case 'setSearchTerm':{
            return payload;
        }
        case 'clearSearchTerm':{
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