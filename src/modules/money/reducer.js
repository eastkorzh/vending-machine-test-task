import * as AT from './action-types';
import { CHANGE_CURRENCY } from './currencyChanger/action-types';
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
    this.RUB = Math.ceil(100*amount)/100;
    this.USD = Math.ceil(100*amount/USD_course)/100;
    this.EUR = Math.ceil(100*(amount/USD_course)/EUR_course)/100;
  }
  if (currency === 'USD') {
    this.RUB = Math.ceil(100*amount*USD_course)/100;
    this.USD = Math.ceil(100*amount)/100;
    this.EUR = Math.ceil(100*amount/EUR_course)/100;
  }
  if (currency === 'EUR') {
    this.RUB = Math.ceil(100*amount*EUR_course*USD_course)/100;
    this.USD = Math.ceil(100*amount*EUR_course)/100;
    this.EUR = Math.ceil(100*amount)/100;
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
        USD: Math.ceil(100*(state.moneyAmount.USD + additionalAmmount.USD))/100,
        RUB: Math.ceil(100*(state.moneyAmount.RUB + additionalAmmount.RUB))/100,
        EUR: Math.ceil(100*(state.moneyAmount.EUR + additionalAmmount.EUR))/100,
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

    case CHANGE_CURRENCY:
      return {
        ...state,
        currency: action.payload.currency,
      };
    
    default: return { ...state }
  }
}
