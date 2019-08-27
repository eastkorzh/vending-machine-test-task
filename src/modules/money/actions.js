import * as AT from './action-types';

export const addMoney = ({ amount, currency }) => ({
  type: AT.ADD_MONEY,
  payload: {
    amount: (isNaN(amount) ? 0 : amount),
    currency,
  },
});

export const removeMoney = () => ({
  type: AT.REMOVE_MONEY,
});
