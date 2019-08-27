import React from 'react';

import styles from './styles.module.scss';
import CurrencyChanger from './currencyChanger/component';

export default ({ moneyAmount, addMoney, removeMoney, currency, changeCurrency }) => {
  const [amount, setAmount] = React.useState('');

  return (
    <div className={styles.grid}>
      <div>{moneyAmount[currency] + ' ' + currency}</div>
      <CurrencyChanger currency={currency}/>
      <input
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
        placeholder='Денег в купюроприемнике'
      />
      <button
        onClick={() => {
          addMoney({ amount: parseInt(amount), currency });
          setAmount('')
        }}
      >
        Добавить
      </button>
      <button
        onClick={() => {
          removeMoney();
          setAmount('');
        }}
      >
        Сбросить
      </button>
    </div>
  )
}
