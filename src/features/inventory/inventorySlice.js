import { inventoryData } from '../../data.js';

export const loadDate = (data) => {
    return {
        type: 'inventory/loadDate',
        payload: inventoryData
    }
}

const initialInventory = [];
export const inventoryReducer = (inventory = initialInventory, {type, payload}) => {
    switch (type) {
        case 'inventory/loadDate': {
            return payload
        }
        default:{
            return inventory
        }
    }
}