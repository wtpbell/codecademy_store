import React from "react";
import {changeItemQuantity} from './cartSlice';
import { calculateTotal, getCurrencySymbol } from '../../utilities/utilities';

export const Cart = ({cart, dispatch, currencyFilter}) => {
    const total = calculateTotal(cart, currencyFilter);
    const cartElements = Object.keys(cart).map(item => createCartItem(item))

    const handleInput = (name, input) => {
        if(input === ''){
            return 
        }
        const newQuantity = Number(input);
        dispatch (changeItemQuantity(name, newQuantity));
    }

    return (
        <div id='cart-container'>
            <ul id="cart-items">{cartElements}</ul>
            <h3 className="total">
                Total{''}
                <span className="total-value">
                    {getCurrencySymbol(currencyFilter)} 
                    {total}{currencyFilter}
                </span>
            </h3>
        </div>
    )
    
    function createCartItem(name) {
        const item = cart[name];
        if (item.quantitiy === 0){
            return ;
        }
        
        return (
            <li key={name}>
              <p>{name}</p>
              <select
                className="item-quantity"
                value={item.quantity}
                onChange={(e) => {
                  handleInput(name, e.target.value);
                }}
              >
                {[...Array(100).keys()].map((_, index) => (
                  <option key={index} value={index}>
                    {index}
                  </option>
                ))}
              </select>
            </li>
          );
        }
      };
      