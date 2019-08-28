import * as AT from './action-types';

export const buyItem = ({ item }) => ({
  type: AT.BUY_ITEM,
  payload: {
    item,
  },
});

export const buyItemFail = ({ message }) => ({
  type: AT.BUY_ITEM_FAIL,
  payload: {
    message,
  },
});
