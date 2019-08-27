import * as AT from './action-types';

const initialState = {
  items: [],
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
        picedItem: actions.payload.item,
      };
    
    default: return { ...state }
  }
}