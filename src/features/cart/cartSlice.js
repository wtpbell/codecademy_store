export const addItem = (itemToAdd) => {
    return {
        type: 'cart/addItem',
        payload: itemToAdd,
    }
}

export const changeItemQuantity = (name,newQuantity) => {
    return {
        type: 'cart/changeItemQuantity',
        payload: {name, newQuantity} ,
    }
}

const initialCart = {};
export const cartReducer = (cart = initialCart, {type, payload}) => {
    switch (type){
        case 'cart/addItem': {
            const {name, price} = payload;
            const quantity = cart[name]? cart[name].quantity + 1 : 1;
            const newItem = {price, quantity};

            return {
                ...cart,
                [name]: newItem
            }}
        case 'cart/changeItemQuantity':{
            const {name, newQuantity} = payload;
            const itemToUpdate = cart[name];
            const updateItem = {
                ...itemToUpdate,
                quantity: newQuantity,
            }
            return {
                ...cart, 
                [name]: updateItem,
            }}

        default: 
            return cart;
    }
}