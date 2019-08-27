import * as AT from './action-types';
import { USD_course, EUR_course } from '../API/localStorage';

const initialState = {
  moneyAmount: {
    RUB: 0,
    USD: 0,
    EUR: 0,
  },
  currency: 'RUB',
}

function MoneyAmount ({ amount, currency }) {
  if (currency === 'RUB') {
    this.RUB = Math.ceil(10*amount)/10;
    this.USD = Math.ceil(10*amount/USD_course)/10;
    this.EUR = Math.ceil(10*(amount/USD_course)/EUR_course)/10;
  }
  if (currency === 'USD') {
    this.RUB = Math.ceil(10*amount*USD_course)/10;
    this.USD = Math.ceil(10*amount)/10;
    this.EUR = Math.ceil(10*amount/EUR_course)/10;
  }
  if (currency === 'EUR') {
    this.RUB = Math.ceil(10*amount*EUR_course*USD_course)/10;
    this.USD = Math.ceil(10*amount*EUR_course)/10;
    this.EUR = Math.ceil(10*amount)/10;
  }
}

export default (state = { ...initialState }, action) => {
  switch (action.type) {
    case AT.ADD_MONEY:
      const additionalAmmount = new MoneyAmount({
        amount: action.payload.amount,
        currency: action.payload.currency,
      });

      const sum = {
        USD: state.moneyAmount.USD + additionalAmmount.USD,
        RUB: state.moneyAmount.RUB + additionalAmmount.RUB,
        EUR: state.moneyAmount.EUR + additionalAmmount.EUR,
      }
      return {
        ...state,
        moneyAmount: sum,
      };
    case AT.REMOVE_MONEY:
      return {
        ...state,
        moneyAmount: {
          RUB: 0,
          USD: 0,
          EUR: 0,
        },
      };

    case AT.CHANGE_CURRENCY:
      return {
        ...state,
        currency: action.payload.currency,
      };
    
    default: return { ...state }
  }
}
