import * as AT from './action-types';

export const changeCurrency = ({ currency }) => ({
  type: AT.CHANGE_CURRENCY,
  payload: {
    currency,
  },
});
