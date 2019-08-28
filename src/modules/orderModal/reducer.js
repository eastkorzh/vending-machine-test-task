import * as AT from './action-types';
import { CLEAR_ERRORS } from './errorModal/action-types'
import { CLEAR_BOUGHT } from './successModal/action-types';

const initialState = {
  boughtItem: null,
  error: null,
}

export default (state = { ...initialState }, actions) => {
  switch (actions.type) {
    case AT.BUY_ITEM:
      return {
        ...state,
        boughtItem: actions.payload.item,
      };
    case AT.BUY_ITEM_FAIL:
      return {
        ...state,
        error: actions.payload.message,
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      }
    case CLEAR_BOUGHT:
      return {
        ...state,
        boughtItem: null,
      }
    
    default: return { ...state }
  }
}