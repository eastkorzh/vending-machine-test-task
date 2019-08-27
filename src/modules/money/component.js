import React from 'react';
import { Dropdown } from 'semantic-ui-react'

import styles from './styles.module.scss';

export default ({ moneyAmount, addMoney, removeMoney, currency, changeCurrency }) => {
  const [amount, setAmount] = React.useState('');

  let currencyForDropdown = null;
  if (currency === 'RUB') currencyForDropdown = 'rouble';
  if (currency === 'USD') currencyForDropdown = 'dollar';
  if (currency === 'EUR') currencyForDropdown = 'euro';

  return (
    <div className={styles.grid}>
      <Dropdown 
        text={currency}
        icon={currencyForDropdown}
        floating
        labeled
        button
        className='icon'
      >
        <Dropdown.Menu>
          <Dropdown.Item 
            icon='rouble'  
            text='RUB'
            onClick={() => {
              changeCurrency({currency: 'RUB'})
            }}
          />
          <Dropdown.Item 
            icon='dollar' 
            text='USD'
            onClick={() => {
              changeCurrency({currency: 'USD'})
            }}
          />
          <Dropdown.Item 
            icon='euro' 
            text='EUR'
            onClick={() => {
              changeCurrency({currency: 'EUR'})
            }}
          />
        </Dropdown.Menu>
      </Dropdown>
      <div>{moneyAmount[currency] + ' ' + currency}</div>
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

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);
