import * as AT from './action-types';
import { BUY_ITEM } from '../orderModal/action-types';

import { setItems } from '../API/localStorage'

const initialState = {
  items: [],
  pickedItem: null,
}

export default (state = { ...initialState }, actions) => {
  switch (actions.type) {
    case AT.REQUEST_ITEMS:
      return {
        ...state,
        items: actions.payload.items || ['error'],
      };
    case AT.PICK_ITEM:
      return {
        ...state,
        pickedItem: actions.payload.item,
      };
    
    case AT.UNPICK_ITEM:
      return {
        ...state,
        pickedItem: null,
      };

    case BUY_ITEM:
      const updatedItems = state.items.map((item) => {
        if (state.pickedItem.name !== item.name) return item;
        return {
          ...item,
          count: item.count - 1,
        }
      });

      setItems(updatedItems);

      return {
        ...state,
        items: updatedItems,
      };
    
    default: return { ...state }
  }
}