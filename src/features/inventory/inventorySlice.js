import { inventoryData } from '../../data';

export const loadData = (data) => {
    return {
        type: 'inventory/loadData',
        payload: inventoryData
    }
}

const initialInventory = [];
export const inventoryReducer = (inventory = initialInventory, {type, payload}) => {
    switch (type) {
        case 'inventory/loadData': {
            return payload
        }
        default:{
            return inventory
        }
    }
}