import React from 'react';

import styles from './styles.module.scss';
import CurrencyChanger from './currencyChanger';

export default ({ moneyAmount, addMoney, removeMoney, currency }) => {
  const [amount, setAmount] = React.useState('');

  return (
    <div className={styles.grid}>
      <div className={styles.moneyAmount}>{moneyAmount[currency]}</div>
      <CurrencyChanger />
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
