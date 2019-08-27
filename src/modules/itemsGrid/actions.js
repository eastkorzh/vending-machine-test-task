import * as AT from './action-types';

export const buyItem = ({ name }) => ({
  type: AT.BUY_ITEM,
  payload: {
    name,
  }
});