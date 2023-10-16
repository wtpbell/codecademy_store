import { inventoryData } from '../../data';

export const loadData = (data) => {
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